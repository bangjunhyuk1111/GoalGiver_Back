module.exports = [
  {
    // 무시할 파일/디렉토리 설정
    ignores: ['node_modules/**'],
  },
  {
    // JS 파일에 대한 설정
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 버전 설정
      sourceType: 'module', // 모듈 시스템 설정
      globals: {
        // Node.js 환경 전역 변수
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        module: 'readonly',
        require: 'readonly',
        // ES6 전역 변수
        process: 'readonly',
        // 추가된 전역 변수
        console: 'readonly',
      },
    },
    rules: {
      // ESLint 규칙 설정
      'no-console': 'off', // console 사용 허용
      indent: ['error', 2], // 들여쓰기: 2칸
      quotes: ['error', 'single'], // 작은 따옴표 사용
      semi: ['error', 'always'], // 세미콜론 강제
      'no-unused-vars': ['error'], // 사용되지 않는 변수 금지
      'no-undef': ['error'], // 정의되지 않은 변수 금지
      eqeqeq: ['error', 'always'], // 일치 연산자 사용 강제
      curly: ['error', 'all'], // 중괄호 강제
      'no-var': ['error'], // var 사용 금지
      'prefer-const': ['error'], // const 사용 권장
      'no-trailing-spaces': ['error'], // 후행 공백 금지
      'eol-last': ['error', 'always'], // 파일 마지막 줄에 공백 줄 추가
    },
  },
];
