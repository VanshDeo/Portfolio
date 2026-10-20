export interface ResearchTrack {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  keyInsights: string[];
  technologies: string[];
  status: 'Published' | 'Active Experiment' | 'Ongoing Research';
}

export const researchTracks: ResearchTrack[] = [
  {
    id: 'edge-quantization',
    badge: 'On-Device AI',
    title: 'Resource-Constrained Wake-Word Detection on ARM Silicon',
    subtitle: 'Zero-cloud acoustic keyword recognition on Raspberry Pi using INT8 quantisation',
    summary:
      'Investigating minimal parameter footprint architectures for edge speech recognition. Demonstrates that 8-bit post-training quantization and depthwise separable convolutions can achieve low word error rates while keeping thermal and power consumption within embedded limits.',
    keyInsights: [
      'Eliminates reliance on external cloud APIs, ensuring absolute local privacy for voice interfaces.',
      'Achieved sub-80 millisecond inference latency on Raspberry Pi without throttling.',
      'Maintains robust noise tolerance across varied acoustic environments.',
    ],
    technologies: ['TensorFlow Lite', 'Python', 'ARM Cortex', 'Audio Mel-Spectrograms'],
    status: 'Active Experiment',
  },
  {
    id: 'midnight-zk',
    badge: 'Privacy-Preserving Web3',
    title: 'Confidential Bidding & State Verification via Zero-Knowledge Proofs',
    subtitle: 'Smart contract confidentiality on the Midnight Network',
    summary:
      'Exploring how zero-knowledge compact contracts can decouple transaction validity from data visibility. Specifically examining how private state proofs permit cryptographic auction execution without exposing competitor valuations.',
    keyInsights: [
      'Proof verification guarantees honest auction settlement without revealing bid sums.',
      'Mitigates on-chain miner-extractable value (MEV) and front-running vulnerabilities.',
      'Modular architecture integrates cleanly with EVM and decentralized interfaces.',
    ],
    technologies: ['Midnight Compact', 'ZK-SNARKs', 'Solidity', 'Web3 Architecture'],
    status: 'Ongoing Research',
  },
  {
    id: 'aditya-swis',
    badge: 'Space Weather & Solar Physics',
    title: 'Aditya-L1 SWIS Payload Telemetry & Interplanetary Halo CME Identification',
    subtitle: 'Spectral analysis of solar wind proton and alpha ion distributions',
    summary:
      'Processing raw particle spectrometer measurements from the Solar Wind Ion Spectrometer (SWIS) on India’s Aditya-L1 solar satellite. Algorithmic detection of abrupt kinetic velocity and density fluctuations that precede geomagnetic storm events.',
    keyInsights: [
      'Differentiates solar wind background plasma from high-energy coronal mass ejection shockfronts.',
      'Automated outlier and noise rejection filters tailored for satellite telemetry streams.',
      'Contributes reproducible Python analytical pipelines for heliophysics space weather evaluation.',
    ],
    technologies: ['Python', 'SciPy', 'Solar Wind Physics', 'Aditya-L1 Telemetry'],
    status: 'Published',
  },
];
