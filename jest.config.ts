import { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$', // Ejecutará solo archivos que terminan en `.spec.ts`
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverage: true, // Habilita el reporte de cobertura
  coverageDirectory: '../coverage',
  testEnvironment: 'node', // Entorno Node.js para pruebas
};

export default config;
