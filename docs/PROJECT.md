# Project information

## Title

**Efficient Real-World Online Reinforcement Learning for Robot Manipulation via
CTDE and Decomposed Critic**

## Authors

Anonymous Authors

## Method summary

The method combines an RLPD-based real-world online RL pipeline, multi-agent
centralized training with decentralized execution (CTDE), and a
reward-decomposed multi-head critic. RLPD samples offline demonstrations and
online interactions in equal proportions; human interventions are retained as
corrective experience. Data collection runs on deployed actors while training
runs asynchronously on a remote high-performance workstation, with policy
parameters periodically synchronized back to the actors.

A continuous SAC actor controls Cartesian end-effector pose, while a
categorical discrete SAC actor controls the gripper. The actors can use distinct
local observations during execution—the gripper policy uses wrist-camera images,
whereas the arm policy also uses a side-view camera—but share a centralized
critic that evaluates their joint hybrid action during training. This CTDE
formulation explicitly models agent interaction and mitigates the
non-stationarity caused by independently trained controllers.

Following Hybrid Reward Architecture (HRA), the critic has separate Q-value
heads for the sparse task reward and a dense, potential-based grasp reward. The
grasp potential is derived from normalized grasp torque or gripper width and
includes a gripper-switching penalty. Each head learns a simpler target over a
compact subset of the state; their weighted sum is used in the actor updates to
improve value estimation under noisy real-world observations.

The hardware includes a tendon-coupled compliant two-finger gripper that
passively supports fingertip and enveloping grasps. It preserves the binary
open–close policy interface and therefore does not increase the learned action
space.

## Evaluation

The framework is evaluated on the Inail arm and Franka Emika Panda arm in three
real-world manipulation tasks, as well as on a simulated Unitree G1 humanoid:

- tennis-ball pick-and-place;
- banana pick-and-place;
- pot resetting; and
- simulated block relocation.

The experiments use dimension-wise randomization regions approximately 3–15
times larger than prior work. Evaluation uses 20 episodes per task.

## Headline results

- Tennis-ball picking improves from 60% to 80% success: **+20 percentage
  points**, or approximately **33% relative improvement**.
- Banana picking improves from 60% to 90% success: **+30 percentage points**,
  or **50% relative improvement**.
- Pot resetting improves from 0% to **55%**.
- Simulated block relocation improves from 25% to **95%**.
- The average absolute improvement across the three real-world tasks is **35
  percentage points**.
- The maximum absolute improvement across the real-world tasks is **55
  percentage points** on pot reset.

## Links

- Live site: <https://hil-harc.github.io/>

## Publication items still required

- official paper or preprint URL;
- final venue and publication year;
- official BibTeX;
- code, model, and dataset URLs, if they will be released;
- final method and results figures; and
- social preview image.

## Social preview guidance

Create a 1200 × 630 px preview image containing the project title, short
description, and one recognizable visual. Save it as
`assets/social-card.png` and add the `og:image` tag described in the README.

## Accessibility and release review

- All meaningful images have accurate `alt` text.
- Decorative images use empty `alt=""` or are hidden from assistive technology.
- Heading levels remain sequential.
- Text is understandable without relying on color alone.
- Links describe their destination.
- The page is usable with a keyboard.
- Reduced-motion preferences are respected.
- Content has been reviewed by at least one project author.
