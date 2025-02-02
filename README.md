## Backend Developer (Nodejs)

**🚀 Project Overview**

This project is a Nodejs-based FAQ Management System that supports multilingual translations, a WYSIWYG editor, and REST API for efficient FAQ retrieval. It also includes caching with Redis for performance improvement.

**📌 Features**

**Nodejs Model for FAQs**

• WYSIWYG Editor (django-ckeditor) for rich text formatting

• Multi-language Support using googletrans

• REST API with Language Filtering (?lang=hi, ?lang=bn)

• Redis Caching for faster translations

• Django Admin Integration for FAQ management

• Unit Tests using pytest

• Docker Support for easy deployment

##   Frontend Screenshots

# English Language FAQs

![Screenshot 2025-02-02 213002](https://github.com/user-attachments/assets/0ca33693-8501-4c94-8d95-b373df5c1f07)

# Hindi Language FAQs

![Screenshot 2025-02-02 213018](https://github.com/user-attachments/assets/603eb9fe-dfa2-4210-829f-0b0dd95df0a1)

# Spanish Language FAQs

![Screenshot 2025-02-02 213035](https://github.com/user-attachments/assets/a5d07318-881e-4224-8472-ddf465f40a95)

# Bengali Language FAQs

![Screenshot 2025-02-02 213117](https://github.com/user-attachments/assets/e910a707-4c22-4da8-bfc1-ae4048884cbb)

## Backend Screenshots 

![Screenshot 2025-02-02 173845](https://github.com/user-attachments/assets/dd170c65-875e-488e-8cb9-de1dc0a280af)

![Screenshot 2025-02-02 173909](https://github.com/user-attachments/assets/cfe0c500-cc6b-4f59-ad3d-3dcc7782cdf4)

![Screenshot 2025-02-02 173947](https://github.com/user-attachments/assets/4f544245-b424-4869-b9c0-e29eb1f44815)




**🛠️ Installation Guide**

# 1️⃣ Clone the Repository

git clone https://github.com/your-username/faq-api.git
cd faq-api

# 2️⃣ Create a Virtual Environment

python3 -m venv venv
source venv/bin/activate  # On Windows use 'venv\Scripts\activate'

# 3️⃣ Install Dependencies

pip install -r requirements.txt

# 4️⃣ Configure Environment Variables

Create a .env file and add the following:

SECRET_KEY=your_secret_key
DEBUG=True
REDIS_URL=redis://localhost:6379/0

# 5️⃣ Run Migrations

python manage.py migrate

# 6️⃣ Start Redis Server (Ensure Redis is installed)

redis-server

# 7️⃣ Run Development Server

python manage.py runserver

📡 API Endpoints

📖 Fetch FAQs (Default: English)

 GET /api/faqs/

🌍 Fetch FAQs in Hindi

 GET /api/faqs/?lang=hi

🏴 Fetch FAQs in Bengali

 GET /api/faqs/?lang=bn

# 🏗️ Deployment with Docker

• 1️⃣ Build and Run Container

• docker-compose up --build

• 2️⃣ Stop the Container

• docker-compose down

# ✅ Running Tests

• pytest

# 📜 Git Commit Convention

• feat: Add multilingual FAQ model

• fix: Improve translation caching

• docs: Update README with API examples

# 👨‍💻 Contribution Guidelines

• Fork the repository.

• Create a feature branch (git checkout -b feature-name).

• Commit changes (git commit -m "feat: Add new feature").

• Push to the branch (git push origin feature-name).

# Create a Pull Request.

• 📝 License

• This project is licensed under the MIT License.

• 📬 Contact

• For any queries, feel free to open an issue or reach out at manusaini22092003@gmail.com.

