# HIL-HARC project website

Static project website for **Efficient Real-World Online Reinforcement Learning
for Robot Manipulation via CTDE and Decomposed Critic**.

**Live site:** <https://hil-harc.github.io/>

HIL-HARC combines human-in-the-loop online reinforcement learning with hybrid
continuous–discrete actions. Separate actors control the robot arm's 6-DoF
Cartesian motion and the gripper state, while a centralized, reward-decomposed
critic coordinates training.

## What is included

- An overview of the HIL-HARC method and training framework.
- Results for tennis-ball picking, banana picking, and pot resetting.
- Baseline and HIL-HARC evaluation videos, including Unitree G1 simulation.
- Training-rollout videos for the Unitree G1, banana, and pot tasks.
- A publication-ready resources section for the paper and BibTeX.

Detailed project metadata and reported results are maintained in
[docs/PROJECT.md](docs/PROJECT.md).

## Run locally

The site uses plain HTML, CSS, and JavaScript, with no build step or package
installation required. From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Repository layout

```text
.
├── assets/
│   ├── favicon.svg
│   ├── figs/
│   │   ├── training_framework.pdf
│   │   └── training_framework.png
│   └── videos/
│       ├── *.jpg
│       └── *.mp4
├── docs/
│   └── PROJECT.md
├── .nojekyll
├── index.html
├── script.js
└── styles.css
```

The main page content and video references are in `index.html`. Site-wide
styling lives in `styles.css`, and `script.js` implements the
copy-to-clipboard interaction. Poster images and MP4 files share the same base
filename under `assets/videos/`.

## Update the site

1. Update project facts and results in `docs/PROJECT.md`.
2. Keep the corresponding page copy in `index.html` in sync.
3. Add or replace media under `assets/figs/` and `assets/videos/`.
4. Preview the site locally and check desktop and mobile layouts.
5. Verify that videos load, external links resolve, and interactive controls
   work with a keyboard.

## Deployment

GitHub Pages serves the repository directly from the root of the `main` branch.
No generated files are required.

To configure a new fork, open **Settings → Pages**, choose **Deploy from a
branch**, and select `main` and `/ (root)`.

## Release checklist

- Add the official paper or preprint URL, venue, year, and BibTeX.
- Add code, model, and dataset links if those artifacts will be released.
- Replace draft method or results visuals with final publication figures.
- Confirm image alternative text, keyboard navigation, and reduced-motion
  behavior.
- Add a 1200 × 630 social preview at `assets/social-card.png` and reference it
  with an `og:image` tag in the page `<head>`.
- Add the project's chosen license.

## License

No license has been selected. Until a `LICENSE` file is added, no permission is
granted to reuse or redistribute this repository's contents.
