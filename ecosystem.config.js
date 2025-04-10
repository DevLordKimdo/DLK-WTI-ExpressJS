module.exports = {
    apps: [
        {
            name       :  'DLK-WTI-ExpressJS',  // PM2에서 표시될 애플리케이션 이름
            script     :  './src/index.js',    // 실행할 스크립트 경로 (컴파일된 JS 파일)
            watch      :  false,                // 파일 변경 감지 자동 재시작 기능
            instances  :  1,                    // 생성할 애플리케이션 인스턴스 수. CPU 프로세스 개수에 따라 할당이 가능. "MAX"값을 하면 프로세스 최대로 가동.
            exec_mode  :  'cluster',            // 실행 모드 (cluster 또는 fork) fork로 설정하면 instances 값은 무시하고 단일로 설정함
            env_dev    :  { NODE_ENV : 'development', APP_ENV : 'dev',  },  // 개발 환경 변수
            env_prod   :  { NODE_ENV : 'production',  APP_ENV : 'prod', },  // 프로덕션 환경 변수
        }
    ]
};