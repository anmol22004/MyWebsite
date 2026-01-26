export type Project = {
  id: string
  name: string
  short: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'pairs-trading',
    name: 'Pairs Trading Strategy Engine',
    short: 'Jupyter-backed pairs trading research using price + technical indicators and directional prediction metrics.',
    description: `Research and implementation of a pairs-trading methodology using both price series and technical indicators. The work is documented in a Jupyter Notebook and includes data preprocessing, cointegration testing, feature engineering (price spreads, lagged returns, RSI, moving averages), and directional prediction metrics tailored for spread movement rather than raw return prediction.

The repository contains datasets, notebooks, visualizations of backtest results, and a reproducible pipeline to evaluate candidate pairs. Results on NSE equities (2015–2019) identified multiple pairings that outperformed a buy-and-hold benchmark; several pairs produced very strong multi-year returns in the analysis.

Highlights: reproducible data pipeline with CSV datasets, exploratory analysis and visualization, cointegration and statistical filters for candidate selection, and custom evaluation metrics focused on directional accuracy and robustness to transaction costs.
`,
    tech: ['Jupyter Notebook', 'Python', 'Pandas', 'NumPy', 'Statsmodels', 'scikit-learn', 'pandas-ta / technical indicators', 'Matplotlib/Seaborn', 'CSV datasets'],
    link: 'https://github.com/anmol22004/Pairs-Trading-with-Machine-Learning'
  },
  {
    id: 'malware-analysis',
    name: 'Malware Detection & Classification Engine',
    short: 'ML-based file classification system using PE feature extraction and ensemble algorithms.',
    description: `A machine learning approach for classifying executable files as malicious or legitimate using static analysis and feature extraction. The system extracts characteristics from PE (Portable Executable) files using Python's pefile library and compares 6 different classification algorithms to select the best performer.

The methodology evaluates Linear Regression, RandomForest, DecisionTree, Adaboost, Gaussian Naive Bayes, and Gradient Boosting models on extracted feature vectors. The system is trained on a dataset of known malware and legitimate binaries, then deployed to classify unseen files. For testing purposes, custom malware samples were generated in a virtual environment using the Veil framework to safely validate detection accuracy.

The project includes trained classifier models (serialized as pickle files), feature extraction pipelines, and test utilities. It demonstrates the practical application of ensemble learning methods in cybersecurity and the importance of using diverse ML algorithms when accuracy is critical.`,
    tech: ['Python', 'scikit-learn', 'pefile', 'Linear Regression', 'RandomForest', 'DecisionTree', 'Adaboost', 'Gaussian Naive Bayes', 'Gradient Boosting', 'Pickle'],
    link: 'https://github.com/anmol22004/Generation-of-Malware-and-its-detection-using-Machine-Learning'
  },
  {
    id: 'encrypted-keylogger',
    name: 'Encrypted KeyLogger & Data Exfiltration System',
    short: 'Educational security research project capturing and encrypting sensitive system data.',
    description: `A comprehensive keystroke and system monitoring tool built for security research and educational purposes. The system captures multiple data streams in parallel: keyboard input via pynput listeners, microphone audio (10-second clips), system screenshots, clipboard contents, and detailed system information (OS, hostname, IP address, machine specs).

All captured data is encrypted using Fernet symmetric encryption from the cryptography library and exfiltrated via Gmail SMTP to a configured email address. The tool demonstrates practical understanding of data acquisition, encryption, and covert communication channels. It includes features for multi-threaded data collection, timed iterations, and clean-up operations to remove local traces.

The project is implemented in both standalone Python and Jupyter Notebook formats for educational flexibility. A PyInstaller spec file enables packaging as a standalone executable. This research explores the technical capabilities of modern data exfiltration techniques and the importance of endpoint security defenses.`,
    tech: ['Python', 'pynput', 'Cryptography (Fernet)', 'PIL (Image Capture)', 'sounddevice', 'scipy', 'win32clipboard', 'smtplib', 'PyInstaller', 'Jupyter Notebook'],
    link: 'https://github.com/anmol22004/Key-Logger'
  }
]

export default projects

