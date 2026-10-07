/* ============================================================
   SOEMITROVERSE — WORLD EXTRAS
   Builds the districts that app.js does not create itself:
   TECHNOLOGY CENTER, THE ARCHIVE, FUTURE DISTRICT, COMMAND CENTER,
   plus their interactables and the HIDDEN ROOM (quest Q5).
   All content is sourced from window.SV_DATA (js/data.js).
   ============================================================ */
import * as THREE from 'three';

export function buildAdditionalWorld(S, D, H) {
  const { building, mesh, cyl, target, collider, textSprite, addInfo, C, ACC } = H;
  const district = (key) => D.DISTRICTS.find((d) => d.key === key);

  /* ---------------- TECHNOLOGY CENTER ---------------- */
  const t = district('tech');
  const tech = building('tech', 'TECHNOLOGY CENTER', t.x, t.z, 34, 26, 26, 'glass');
  tech.add(textSprite('TECHNOLOGY CENTER', 0, 29, -13.4, 24, 2, { size: 64, color: '#dbe6f6' }));
  mesh(tech, 0, 6, 13.6, 22, 11, 0.3, C.glass, { cast: false });
  for (let i = 0; i < D.TECH_STACK.length; i++) {
    const gx = -18 + i * 12;
    mesh(tech, gx, 3.2, 13.4, 8.4, 5.6, 0.34, ACC.tech, { cast: false });
  }
  const techDesc = D.TECH_STACK.map((g) => g.group + ' — ' + g.items.join(', ')).join(' · ');
  const techPylon = new THREE.Group();
  techPylon.position.set(t.x, 0, t.z + 30);
  S.scene.add(techPylon);
  cyl(techPylon, 0, 0.4, 0, 1.8, 2.2, 0.8, C.dark, 10);
  cyl(techPylon, 0, 1.05, 0, 1.4, 1.5, 0.5, C.metal, 10);
  mesh(techPylon, 0, 1.9, 0, 2.8, 2.6, 0.5, ACC.tech, { cast: false });
  mesh(techPylon, 0, 1.9, 0.3, 2.2, 2.0, 0.06, C.glass, { cast: false });
  techPylon.add(textSprite('TECH STACK', 0, 3.9, 0, 8, 1.3, { size: 60, color: '#dbe6f6' }));
  collider(t.x, t.z + 30, 3.0, 3.0);
  addInfo('SOFTWARE · AI / LLM DEPLOYMENT · DIGITAL TRANSFORMATION', t.x, t.z + 46, 0xdbe6f6, 30);
  target(techPylon, 7, 'OPEN TECH STACK', 'tech', { name: 'TECH STACK', description: techDesc });

  /* ---------------- THE ARCHIVE ---------------- */
  const a = district('archive');
  const arch = building('archive', 'THE ARCHIVE', a.x, a.z, 30, 24, 22);
  arch.add(textSprite('THE ARCHIVE', 0, 24.6, -12.4, 20, 2, { size: 66, color: '#efe3c8' }));
  mesh(arch, 0, 5, 11.6, 18, 9, 0.3, C.glass, { cast: false });
  const cv = D.CAREER[0];
  const plinth = new THREE.Group();
  plinth.position.set(a.x, 0, a.z + 26);
  S.scene.add(plinth);
  cyl(plinth, 0, 0.5, 0, 2.4, 2.9, 1.0, C.dark, 12);
  cyl(plinth, 0, 1.15, 0, 2.0, 2.2, 0.3, C.metal, 12);
  mesh(plinth, 0, 2.7, 0, 3.4, 2.8, 0.4, ACC.archive, { cast: false });
  mesh(plinth, 0, 2.7, 0.22, 3.0, 2.4, 0.05, C.glass, { cast: false });
  plinth.add(textSprite('CAREER TIMELINE', 0, 4.8, 0, 9, 1.3, { size: 54, color: '#efe3c8' }));
  collider(a.x, a.z + 26, 3.2, 3.2);
  addInfo('FEB 2018 – PRESENT · CEO / SOLOPRENEUR · PT. AGRA KARYA DIGITAL', a.x, a.z + 44, 0xefe3c8, 32);
  target(plinth, 7, 'OPEN THE ARCHIVE', 'career', cv);

  /* ---------------- COMMAND CENTER ---------------- */
  const c = district('command');
  const cmd = building('command', 'COMMAND CENTER', c.x, c.z, 36, 30, 34, 'terrace');
  cmd.add(textSprite('COMMAND CENTER', 0, 36.6, -15.4, 24, 2.2, { size: 66, color: '#fff0d0' }));
  mesh(cmd, 0, 12, 15.4, 20, 18, 0.3, C.glass, { cast: false });
  cyl(cmd, 0, 40, 0, 0.4, 0.8, 8, C.metal, 8);
  const beacon = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), ACC.command);
  beacon.position.set(0, 45, 0);
  cmd.add(beacon);
  addInfo('CONTACT · COLLABORATION · NEXT VENTURE', c.x, c.z + 48, 0xfff0d0, 28);

  /* ---------------- FUTURE DISTRICT ---------------- */
  const f = district('future');
  const fut = building('future', 'FUTURE DISTRICT', f.x, f.z, 28, 28, 30, 'glass');
  fut.add(textSprite('FUTURE DISTRICT', 0, 33.4, -14.4, 22, 2, { size: 64, color: '#e4e9ff' }));
  const futurePylon = new THREE.Group();
  futurePylon.position.set(f.x, 0, f.z + 30);
  S.scene.add(futurePylon);
  cyl(futurePylon, 0, 0.5, 0, 1.6, 2.0, 1.0, C.dark, 8);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.22, 10, 40), ACC.future);
  ring.position.set(0, 3.4, 0);
  ring.rotation.x = Math.PI / 2;
  futurePylon.add(ring);
  futurePylon.add(textSprite('WHAT IS NEXT?', 0, 6.2, 0, 9, 1.3, { size: 56, color: '#e4e9ff' }));
  collider(f.x, f.z + 30, 2.6, 2.6);
  addInfo('CURRENTLY BUILDING THE NEXT THING', f.x, f.z + 46, 0xe4e9ff, 26);
  target(futurePylon, 8, 'LOOK INTO THE FUTURE', 'future', { name: 'FUTURE DISTRICT', description: 'Unreleased work in progress.' });

  /* ---------------- HIDDEN ROOM (quest Q5) ---------------- */
  const secret = D.SECRETS.find((s) => s.id === 'S3') || D.SECRETS[0];
  const hx = -95, hz = -300;
  const room = new THREE.Group();
  room.position.set(hx, 0, hz);
  S.scene.add(room);
  mesh(room, 0, 0.55, 0, 16, 1.1, 14, C.dark, { cast: false });
  mesh(room, 0, 3.4, 0, 14, 5.6, 12, C.stone);
  mesh(room, 0, 6.4, 0, 14.6, 0.6, 12.6, C.dark);
  mesh(room, 0, 3.2, 6.2, 4, 4.4, 0.34, ACC.future, { cast: false });
  room.add(textSprite('?', 0, 8.6, 0, 4, 4, { size: 120, color: '#8be0ff' }));
  collider(hx, hz, 7.4, 6.4);
  addInfo('UNMARKED SECTOR · NO PUBLIC RECORD', hx, hz + 20, 0x8be0ff, 26);
  target(room, 9, 'ENTER HIDDEN ROOM', 'secret', { name: secret.name, note: secret.note });

  return { districts: ['tech', 'archive', 'future', 'command'], hiddenRoom: { x: hx, z: hz, secret: secret.name } };
}
