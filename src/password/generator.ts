import { writeFileSync } from "fs";

const WORDS = [
    "river", "mountain", "forest", "planet", "coffee", "orange", "rocket",
    "castle", "thunder", "paper", "window", "silver", "garden", "dragon",
    "ocean", "candle", "shadow", "bridge", "falcon", "harbor", "winter",
    "summer", "cloud", "island", "violet", "marble", "compass", "anchor",
    "galaxy", "saturn", "phoenix", "banana", "cactus", "breeze", "tunnel",
    "pencil", "mirror", "bucket", "meadow", "whisper", "lantern", "tiger",
    "eagle", "crystal", "storm", "blanket", "wallet", "button", "ladder"
];

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}<>?";

function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function pick(chars: string): string {
    return chars[randomInt(chars.length)];
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function randomWord(): string {
    return WORDS[randomInt(WORDS.length)];
}

function capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
}

function generateStrong(): string {
    if (Math.random() < 0.5) {
        // Passphrase (16+ chars)
        const count = 4 + randomInt(4); // 4-7 words

        const words = [];

        for (let i = 0; i < count; i++) {
            let w = randomWord();

            if (Math.random() < 0.35)
                w = capitalize(w);

            words.push(w);
        }

        return (
            words.join("-") +
            pick(SYMBOLS) +
            randomInt(9000).toString().padStart(4, "0")
        );
    }

    // Fully random
    const length = 18 + randomInt(11);

    const chars =
        LOWER + UPPER + NUMBERS + SYMBOLS;

    const password = [
        pick(LOWER),
        pick(UPPER),
        pick(NUMBERS),
        pick(SYMBOLS)
    ];

    while (password.length < length) {
        password.push(pick(chars));
    }

    return shuffle(password).join("");
}

function generateDecent(): string {
    const length = 10 + randomInt(6);

    const chars =
        LOWER + UPPER + NUMBERS;

    const password = [
        pick(LOWER),
        pick(UPPER),
        pick(NUMBERS)
    ];

    if (Math.random() < 0.6) {
        password.push(pick(SYMBOLS));
    }

    while (password.length < length) {
        password.push(pick(chars));
    }

    return shuffle(password).join("");
}

function generateWeak(): string {
    const length = 6 + randomInt(5);

    const chars =
        LOWER + NUMBERS;

    let password = "";

    while (password.length < length) {
        password += pick(chars);
    }

    return password;
}

const passwords: string[] = [];

for (let i = 0; i < 250; i++)
    passwords.push(generateStrong());

for (let i = 0; i < 350; i++)
    passwords.push(generateDecent());

for (let i = 0; i < 400; i++)
    passwords.push(generateWeak());

// Randomize order
const randomized = shuffle(passwords);

writeFileSync(
    "passwords.txt",
    randomized.join("\n"),
    "utf8"
);

console.log(`Generated ${randomized.length} passwords.`);