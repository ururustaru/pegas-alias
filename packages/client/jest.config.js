import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub'
  },
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}
