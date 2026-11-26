# Comunicare prin imagini — free picture-exchange app

A free web app that families install on the phone or tablet like a normal app.
It has no server, no accounts and no costs. All photos, voice recordings and cards
stay on each family's own device.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `manifest.webmanifest`, `sw.js` | Let it install on the home screen and work offline |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |

## Put it online for free (GitHub Pages, about 10 minutes, one time)

1. Make a free account at github.com.
2. Click **+** → **New repository**. Name it, for example, `comunicare`. Set it to **Public** and click **Create repository**.
3. Click **uploading an existing file**, drag in **all 7 files** from this folder, and click **Commit changes**.
4. Go to **Settings** → **Pages**. Under *Branch* choose **main** and **/(root)**, then click **Save**.
5. After 1–2 minutes your link appears there, for example `https://YOUR-NAME.github.io/comunicare/`.
   Send this link to the families.

The link must be **https** (GitHub Pages already is). Otherwise the microphone and installing won't work.

**To update the app later:** upload the new `index.html` to the same repository.
Families get the update the next time they open the app with internet. Their cards stay as they are.

## How families install it

- **Android (Chrome):** open the link → menu ⋮ → *Add to home screen* / *Install app*.
- **iPhone (Safari):** open the link → Share button → *Add to Home Screen*.

**Install first, then add photos.** On iPhone the installed app keeps its own cards, separate from Safari.
After that it works without internet. Internet is needed only to search the free ARASAAC pictograms.

## How it works

- **Child mode** (default). The child picks a category, then a picture.
  - **Level 1 – one picture:** tapping a picture shows only that picture and one 🔊 button. The child shows the screen to the adult.
  - **Levels 2–3 – fixed slots:** *Cine? + Ce face?* (+ *Ce?*). Only the matching words are shown for each slot.
  - **Levels 4–5 – free sentences:** pronouns, colours, shapes, sizes, characteristics, tastes and smells, emotions, connecting words (și, dar, pentru că…).
  - Verbs change form to match the subject: *eu mănânc*, *mama mănâncă*, *eu și mama ne jucăm*.
- **Back from the show screen:** the adult **holds** the ↩ button for 1 second, so the child can't leave it by tapping.
- **🔊 button limits** (Settings): a pause after each listen, and an optional maximum number of listens.
- **Adult mode:** **hold** the 🔒 for 1.5 seconds. There you can:
  - choose the level and turn levels on or off (use 1, 2, 4 or all 5)
  - add or edit cards: photo from camera or gallery, free ARASAAC pictogram, emoji or words only
  - record a parent's voice for a card
  - hide a card, reorder cards, add categories
- **Backup:** Settings → *Salvează copia* makes one file with all photos and voices.
  It can be sent to the other parent, who opens it with *Încarcă o copie*.
  Families should make a backup now and then, because the data lives only on the phone.

## Licences

- ARASAAC pictograms: author Sergio Palao, owner Government of Aragón, licence CC BY-NC-SA 4.0. They are free for non-commercial use, which fits a free app. The credit is shown in the app.
- Emoji are drawn by each phone's own system font.
- The app code is yours to share freely.
