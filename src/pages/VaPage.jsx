import React, { useState, useRef } from 'react';
import { Room, createLocalAudioTrack } from 'livekit-client';

const BACKEND_URL = import.meta.env.VITE_API_BASE;
const LIVEKIT_WS_URL = 'wss://ds-nl2qsdc2.livekit.cloud';

export default function VoiceAgent() {
  const [roomName, setRoomName] = useState(`room-${Math.random().toString(36).slice(2, 8)}`);
  const [userId, setUserId] = useState(`frontend-${Math.random().toString(36).slice(2, 8)}`);
  const roomRef = useRef(null);

  const handleJoin = async () => {
    try {
      // 🔌 Disconnect existing room if needed
      if (roomRef.current) {
        console.log('🔌 Disconnecting previous room');
        roomRef.current.disconnect();
        roomRef.current = null;
      }

      // 🔓 iOS fix: request mic access and resume AudioContext
      await navigator.mediaDevices.getUserMedia({ audio: true });
      if (typeof AudioContext !== 'undefined') {
        const audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
      }

      // 🔑 Step 1: Get token
      const tokenRes = await fetch(`${BACKEND_URL}/getToken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identity: userId, room: roomName }),
      });
      const { token } = await tokenRes.json();
      if (!token) throw new Error('❌ No token received from backend');
      console.log('🔑 Received token');

      // 🧠 Step 2: Create room
      const room = new Room();
      roomRef.current = room;

      // 📡 Step 3: Set event listeners
      room.on('connected', () => console.log('✅ Connected to LiveKit room'));
      room.on('disconnected', () => console.log('🔌 Disconnected from room'));
      room.on('connectionError', err => console.error('❗ Connection error:', err));

      room.on('participantConnected', p => console.log('👤 Participant joined:', p.identity));
      room.on('participantDisconnected', p => console.log('👋 Participant left:', p.identity));

      // 🔗 Step 4: Connect to server
      await room.connect(LIVEKIT_WS_URL, token);

      // 🎤 Step 5: Create and publish mic track
      const micTrack = await createLocalAudioTrack();
      console.log('🎙️ Mic track created:', micTrack);

      // Optional mic test (hear yourself)
      const micTestEl = micTrack.attach();
      micTestEl.volume = 0.3;
      micTestEl.autoplay = true;
      document.body.appendChild(micTestEl);

      await room.localParticipant.publishTrack(micTrack);
      console.log('📢 Mic published');

      // 🔉 Step 6: Subscribe to remote audio
      room.on('trackSubscribed', (track, publication, participant) => {
        if (track.kind === 'audio') {
          console.log(`🔈 Subscribed to audio from ${participant.identity}`);
          const audioEl = track.attach();
          audioEl.autoplay = true;
          document.body.appendChild(audioEl);
        }
      });

    } catch (err) {
      console.error('❌ Error joining room:', err);
      alert('Join failed. See console.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎙️ LiveKit Voice Join</h2>
      <label>User ID: <input value={userId} onChange={e => setUserId(e.target.value)} /></label><br />
      <label>Room: <input value={roomName} onChange={e => setRoomName(e.target.value)} /></label><br />
      <button className="text-white" onClick={handleJoin}>Join Room</button>
    </div>
  );
}
