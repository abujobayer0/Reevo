# Reevo - Next-Gen Video Platform 🚀

![Reevo Banner](public/reevo.png)

Reevo is a professional video creation and sharing platform enhanced with AI capabilities, designed for modern creators and teams. Record, share, and analyze videos with powerful features and seamless collaboration.

## 🌟 Key Features

- **Real-Time Recording**: Capture high-quality screen recordings with no third-party dependencies
- **AI-Powered Analysis**: Get instant transcriptions, summaries, and content generation
- **Instant Sharing**: Share videos instantly with your team and prospects
- **Workspace Management**: Organize videos in folders and collaborate with team members
- **First View Notifications**: Get notified when someone watches your video for the first time
- **Pro Features**: Access advanced features with our Pro subscription

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS, Tanstack Query
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Payment**: Stripe
- **AI**: OpenAI for transcriptions and summaries
- **Email**: Nodemailer
- **Desktop App**: Electron

## 📦 Required Repositories

To use Reevo, you'll need to set up three components:

1. **Web Application** (Current Repo)
2. **Desktop Application**: [Reevo Desktop](https://github.com/abujobayer0/Reevo-Desktop-ElectronJS)
3. **Recording Server**: [Reevo Server](https://github.com/abujobayer0/Reevo-Server-Express)

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
bun >= 1.0.0
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/abujobayer0/Reevo-Server-Express.git
cd reevo
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Update the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
STRIPE_CLIENT_SECRET=
STRIPE_SUBSCRIPTION_PRICE_ID=
NEXT_PUBLIC_HOST_URL=
NEXT_PUBLIC_MAILER_EMAIL=
NEXT_PUBLIC_MAILER_PASSWORD=
```

5. Run the development server:

```bash
bun run dev
```

## 📱 Desktop Application

To record videos with Reevo, you'll need to install our desktop application. The desktop app provides:

- Screen recording
- Webcam recording
- Audio capture
- Custom recording presets
- Direct upload to your workspace

Get the desktop app from [Reevo Desktop](https://github.com/yourusername/reevo-desktop)

## 🔒 Security

- Enterprise-grade encryption
- Secure data handling
- Authentication via Clerk
- HTTPS/SSL encryption

## 💳 Pricing

### Free Plan

- Basic recording features
- Limited storage
- Personal workspace

### Pro Plan ($99/month)

- Unlimited recordings
- AI features
- Priority support
- Team collaboration
- Custom branding

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Prisma](https://www.prisma.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)

## 📞 Support

For support, email zubayer.munna.dev@gmail.com.

---

Built with ❤️ by [Abu Jobayer](https://github.com/abujobayer0)
