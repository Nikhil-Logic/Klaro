# Klaro 👗 – Fashion Recommendation System

Klaro is a deep learning-powered fashion recommendation system that suggests visually similar clothing items. It uses a ResNet50-based image embedding model served via a FastAPI backend, with a Vite + React frontend. Hosted on [Vercel](https://klaro-dev.vercel.app).

## 🔗 Live Demo
👉 [https://klaro-dev.vercel.app](https://klaro-dev.vercel.app)

## 📦 Features

- 🧠 CNN-powered image similarity (ResNet50)
- 📸 Upload any fashion image to get recommendations
- 🧾 Displays clothing metadata (gender, color, type, usage)
- ⚡ FastAPI backend with REST API
- 🌐 React + Vite frontend
- ☁️ Cloudinary-hosted images
- 🤗 Hugging Face-hosted data (CSV, embeddings, filenames)

## 🧰 Tech Stack

| Part       | Technology                      |
|------------|----------------------------------|
| Frontend   | React (Vite), Tailwind CSS       |
| Backend    | FastAPI, TensorFlow, Sklearn     |
| Model      | ResNet50 (Image Embeddings)      |
| Hosting    | Vercel (Frontend), Hugging Face (Data), Cloudinary (Images) |

## 📸 How It Works

1. User uploads an image
2. The backend:
   - Extracts features using ResNet50
   - Compares them to precomputed embeddings
   - Returns top 5 most similar clothing items
3. Frontend displays the recommended images + metadata

## 🛠️ Setup Instructions

### 1. Backend

```bash
git clone https://github.com/Nikhil-Logic/Klaro
cd Klaro/backend
pip install -r requirements.txt
uvicorn app:app --reload
