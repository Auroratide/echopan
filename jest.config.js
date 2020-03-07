module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: 'example.tsx?$',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
}
