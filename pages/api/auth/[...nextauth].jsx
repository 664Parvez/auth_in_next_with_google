import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

const GoogleAuth = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "344569197345-k7obmtgq3cqhhunl3164diek8gunvdkt.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})

export default GoogleAuth