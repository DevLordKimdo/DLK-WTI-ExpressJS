-- post_board table
DROP TABLE IF EXISTS post_board;

CREATE TABLE post_board  (
    idx INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    username TEXT NOT NULL,
    datetime TEXT DEFAULT (datetime('now', 'localtime')),
    hit INTEGER DEFAULT 0
) STRICT;

-- post_board table data
INSERT INTO post_board (title , content , username , hit) VALUES ('첫번째 입력글' , '첫번째 글의 내용' , 'admin' ,   0);
INSERT INTO post_board (title , content , username , hit) VALUES ('두번째 입력글' , '두번째 글의 내용' , 'admin' ,  10);
INSERT INTO post_board (title , content , username , hit) VALUES ('세번째 입력글' , '세번째 글의 내용' , 'admin' ,  50);
INSERT INTO post_board (title , content , username , hit) VALUES ('네번째 입력글' , '네번째 글의 내용' , 'admin' , 100);
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 01' , '결국 저에게 있어 적은 없습니다. 굳이 말하자면 이전에 제가 만들었던 작품들이 저의 적이지요.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 02' , '기본적으로 사람들이 재미를 느끼는 놀이는 나라에 관계없이 통할 수 있다. 사람들이 진심으로 즐겁게 느끼는 것이 무엇인지를 생각하고 제품을 만든다면 세계 어디에서도 팔 수 있다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 03' , '다른 이들과 경쟁하는 것을 생각할 때의 중요한 문제는 이미 나왔던 것을 참고하고 이를 쓰러뜨리려 하는 일입니다. 다른 회사들이 지금 하고 있는 것을 바라보기보다, 닌텐도는 독특함(Uniqueness)에 초점을 맞추고 있습니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 04' , '제가 전달하고자 하는 재미라는 것은 단순히 말하면 컨트롤러를 들고 게임을 플레이할 때 딱 알맞다는 느낌이 드는가, 그리고 그것이 플레이어를 행복하게 만드는가에 관한 것입니다. 컨트롤러와 모니터를 통해 당신은 자유롭게 새로운 경험을 할 수 있을 것입니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 05' , '모든 경험은 삶의 양식이 되기 때문에 인생에 헛된 경험은 없습니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 06' , '저 스스로는 일본의 게임을 만드는 것이 아닌, 교토의 게임을 만드는 것이 우리가 지금 하고 있는 일이라고 믿고 있습니다. 교토에서 만들어진 게임의 특색은 도쿄에서 만들어진 게임의 그것과는 차이가 있으며, 저와 같은 교토 출신의 사람은 유행을 따르는 것을 싫어하고 오히려 유행을 만들어나가는 것을 더 좋아합니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 07' , '다른 회사들은 상식적으로 타당한 비즈니스를 합니다. 그런데 그건 지루하잖아요. 같은 게임이 모든 플랫폼에 나오고 말이죠. 닌텐도는 크리에이터들이 서로 협력하고 기존에 없던 게임을 생각해낼 수 있는 환경을 원합니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 08' , '왜냐하면 그건 트렌드이고 저는 트렌드를 벗어나려고 시도하기 때문입니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 09' , '저는 기획자입니다. 저는 제 자신이 무언가를 창조한다고 생각하지 않습니다. 그보다는 사람들이 즐길 만한 제품을 만드는 것이 제 일이지요. 그것이 바로 제가 만든 게임들을 예술보다는 상품이라고 부르는 이유입니다. 단순히 아이디어를 떠올리고 구현하는 것에 대한 문제가 아니거든요. 플래너(planner)의 일은 자신에게 주어진 제약 안에서 할 수 있는 한 최고의 무언가를 만드는 것입니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('미야모토 시게루 명언 10' , '닌텐도는 경쟁자들이 하는 일에는 별 신경을 쓰지 않는다. 재미있는 게임을 내놓자는 게임회사의 본질에 집중하면, 자연스럽게 소비자들은 우리 제품에 참여할 것이라고 믿는다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 게이브뉴웰 명언1' , '늦어지는 건 잠시 기다릴 뿐이다. 엿같은 건 영원히 남는다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 게이브뉴웰 명언2' , '내일의 프로그래머는 미래의 마법사 입니다. 당신은 다른 사람들이 봤을 때 마법을 가지고 있는 것처럼 보일 것입니다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 브라이언 파고 명언' , 'RPG의 3 요소는 탐험 발견 퍼즐 이다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 워렌 스펙터 명언' , 'RPG는 굴림이 아니라 역할로 정의되어야 한다' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 존 카멕 명언' , '게임의 스토리는 포르노의 그것과 같다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('게임 개발자 스벤 빈케 명언' , '게임에서 가장 중요한 것은 콘텐츠인데, 구독 서비스가 시장 지배적인 방식이 되면 게이머들은 좋은 콘텐츠를 얻기 어려워질 것이다.' , 'admin' , '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('소프트웨어 생명주기 (SDLC)','시스템 요구분석, 개발부터 운용 유지보수 까지의 절차 및 프로세스','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('폭포수 모델 (Waterfall Model)','순차적, 선형적, 가장 오래된, 성공사례 많음, 단계별 정의 명확, 요구사항 변경 어려움','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('애자일 방법론 (Agile)','절차보다 사람중심, 변화에 유연, 신속적응, 효율적 개발, 적응적 경량개발 방법론','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('푸트남(Putnam)모형','소프트웨어 개발주기의 단계별로 요구할 인력의 분포를 가정하는 비용산정 모형.','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비용산정모형 - LOC','각 기능의 원시 코드 라인 수의 비관치, 낙관치, 기대치를 측정. 예측치: (낙관치 + 4 * 기대치 + 비관치) / 6','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비용산정모형 - Man Month','(man Month) = (LOC) / (프로그래머 월간 생산성) (프로젝트 기간) = (Man Month) / (프로젝트 인력)','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('소프트웨어 아키텍처','소프트웨어 구성요소와 그 구성요소가 가진 특성 중에서 외부에 드러나는 특성 그리고 구성요소 간의 관계를 표현하는 시스템 구조.','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('소프트웨어 아키텍처 패턴','SW 설계 시 참조할 수 있는 일반화된 재사용 가능 방식. (큰 그림)','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('OMT (Object Modeling Technique)','럼바우 모델. 그래픽 표기법을 이용해 SW 구성요소 모델링. 객체지향 분석기법 중 하나.','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('데이터 흐름도(DFD; Data Flow Diagram)','시스템 구성 요소인 프로세스와 프로세스 간 데이터 흐름을 표현하는 도구. 버블(bubble)차트라고 부르기도 함.','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('분석 자동화 도구','요구사항을 자동으로 분석, 요구사항 명세서를 기술하도록 개발된 요구사항 분석을 위한 자동화 도구','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('CMMI(Capability Maturity Model Integration)','소프트웨어 개발 업무능력/성숙도 평가 및 프로세스 개선 등 지속적인 품질 개선 모델','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('HIPO(Hierarchical Input Process Output)차트','Input-Process-Output으로 이루어진 모듈을 계층적으로 나타낸 도표. 시스템의 분석 및 설계나 문서화에 사용되는 기법으로 계층을 구성하는 각 모듈별 실행 과정인 입력, 처리, 출력 기능을 나타냄.','warmonker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('프로세스','CPU에 의해 처리되는 사용자 프로그램, 시스템 프로그램, 즉 실행중인 프로그램','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('프로세스 상태 전이','작업이 시스템에 입력되어 완료되기 까지의 프로세스 상태','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('스레드','프로세스 보다 가벼운, 독립적으로 수행되는 순차적인 제어의 흐름. 실행의 단위','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('선점형 스케줄링','프로세스가 CPU를 차지하고 있을 때 우선순위가 높은 프로세스가 점유를 빼앗는 방식','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 스케줄링','프로세스가 CPU를 차지하고 있을 때 작업 종료전까지 다른 프로세스가 점유를 빼앗지 못하는 방식','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('선점형 알고리즘 - SRT','작업 시간이 짧은 프로세스를 우선순위로 지정','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('선점형 알고리즘 - 라운드로빈','프로세스들 사이에 우선순위를 두지 않고, 순서대로 시간 단위로 CPU를 할당하는 방식. 프로세스들이 작업을 완료할 때까지 계속 순환하면서 실행. ','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('선점형 알고리즘 - 다단계 큐','Ready큐를 여러 개 사용하는 기법. 각각의 큐는 자신만의 독자적 스케줄링 알고리즘을 수행','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('선점형 알고리즘 - 다단계 피드백 큐','FCFS(FIFO)와 라운드로빈을 혼합.  새로운 프로세스는 높은 우선순위, 실행시간이 지날수록 점점 낮은 순위, 마지막 단계는 라운드 로빈 방식으로 적용','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 알고리즘 - FCFS (FIFO)','프로세스가 대기 큐에 온 순서대로 CPU 할당','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 알고리즘 - 우선순위','프로세스별 우선순위를 설정. 우선순위 대로 CPU 할당','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 알고리즘 - SJF','가장 짧은 작업부터 수행','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 알고리즘 - 기한부','작업들 명시된 시간이나 기한 내에 완료되도록 계획','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('비선점형 알고리즘 - HRN','현재 응답률(Response Ratio)이 가장 높은 것을 선택. 우선순위(가장 높은값) = (대기시간 + 서비스 시간) / 서비스 시간','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('프로세스 교착상태(DeadLock)','두 개 이상의 프로세스가 서로의 작업이 끝나기 만을 기다리고 있어 둘 다 영원히 끝나지 않는 상황','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('은행가 알고리즘(Banker’s Algorithm)','교착상태 회피(Avoidance) 기법 중 하나. 프로세스는 사전에 자기 작업에 필요한 자원의 수를 제시하고 운영체제가 자원의 상태를 감시. 안정상태일 때만 자원을 할당함.','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('세그멘테이션 기법(Segmentation)','하나의 프로세스를 여러 개의 조각으로 나누어 주기적 장치 공간 내에 분산하여 배치하는 기법','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('스레싱(Thrashing)','어떤 프로세스가 계속적으로 페이지 부재가 발생하여 프로세스의 실제 처리 시간보다 페이지 교체 시간이 더 많아지는 현상','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 배치 기법 종류 - 최초 적합(First-fit)','프로세스 공간 중 첫 번째 분할에 할당','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 배치 기법 종류 - 최적 적합(Best fit)','공간 중 크기가 비슷한 곳에 할당','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 배치 기법 종류 - 최악 적합(Worst fit)','공간 중 크기가 가장 큰 공간에 할당','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 반입 기법','주기억장치에 적재할 다음 프로세스의 반입 시기를 결정하는 기법','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 단편화','분할된 주 기억 장치에 프로세스를 할당, 반납 과정에서 사용되지 못하고 낭비되는 기억장치가 발생하는 현상','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 단편화 - 내부 단편화','분할된 공간에 프로세스를 적재한 후 남는 공간 고정 분할 할당 방식 또는 페이징 기법 사용 시 발생하는 메모리 단편화','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메모리 단편화 - 외부 단편화','메모리 작업이 반복될 때 중간중간에 생긴 사용하지 않는 메모리가 쌓여 총 메모리 공간은 충분하지만 실제로 할당할 수 없는 상황','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('마이크로 커널(Micro Kernel)','장치 드라이버, 프로토콜 스택, 파일 시스템과 같은 전통적인 OS의 기능들을 사용자 영역에 놓고 하드웨어 추상화를 최소화한 커널','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('페이지 교체 알고리즘','한정적인 메모리를 효율적으로 사용하기 위한 기법 중 하나. 메모리에 올려진 페이지 중 어떤 것을 내리고 어떤 새로운 페이지를 올릴지를 결정하는 규칙.','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('캐시의 지역성(Cache Locality)','데이터에 대한 접근이 시간적 혹은 공간적으로 가깝게 발생하는 것. 캐시의 적중률(Hit rate)을 극대화하여 캐시가 효율적으로 동작하기 위해 사용되는 성질','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('하이퍼바이저(Hypervisor)','하나의 호스트 컴퓨터상에서 동시에 다수의 운영체제를 구동 시킬 수 있는 HW와 OS 사이의 SW 가상화 플랫폼. VM과 하드웨어 간의 IO 명령을 처리하는 인터페이스.','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('SDDC(Software-Defined Data Center)','데이터센터의 모든 인프라인 네트워크, 스토리지, 컴퓨터, 보안 등이 가상화 되어 서비스로서 제공되는 차세대의 핵심적인 데이터센터 솔루션.','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('도커(Docker)','리눅스 컨테이너(LXC) 기술을 바탕으로 애플리케이션을 격리된 상태에서 실행하는 가상화 솔루션','kato', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('프로토콜(Protocol)','컴퓨터 또는 전자 기기 간의 원활한 통신을 위해 지키기로 약속한 규약. 프로토콜에는 신호 처리법, 오류 처리, 암호, 인증, 주소 등을 포함','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('라우팅 알고리즘','목적지 까지의 최적 경로를 산출하기 위한 법칙','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('분배계층(Distribution Layer)','네트워크 계층에서 코어(core)-분배(Distribution)-액세스(Access) 계층의 분배계층. 트래픽을 처리하기 위한 정책을 결정하는 계층','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('소켓(Socket)','IP address와 Port번호가 합쳐진 네트워크 상에서 서버 프로그램과 클라이언트 프로그램이 통신을 할 수 있도록 해주는 교환 기술','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('UWB(Ultra Wide Band; 초광대역무선)','중심 주파수의 20% 이상의 점유 대역폭을 가지는 신호, 또는 점유 대역폭과 상관 없이 500MHz 이상의 대역폭을 갖는 신호와 수 Ghz대의 초광대역을 사용하는 초고속의 무선 데이터 전송','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('MQTT(Message Queuing Telemetry Transport)','IOT기기, 텔레메트리 장비들에 최적화된 가벼운 메세징 프로토콜. 텔레메트리(Telemetry): 먼 거리나 접근할 수 없는 지점에서 일어나는 데이터를 수집하고 전송하는 통신 방법','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('Wi-SUN(Wireless Smart Utility Network)','IEEE 802.15.4g 표준 기반. 스마트 그리드와 연계하여 전기, 수도, 가스 등의 공급자가 무선 네트워크를 이용해 에너지 효율을 관리하는 무선 특화 기술.','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메시 네트워크(Mesh Network)','네트워크를 구성하는 각 노드들이 다른 노드의 작동 가능/작동 불가능에 상관없이 항상 네트워크를 가동하는 형태의 구조','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('애드 혹 네트워크(Ad-hoc Network)','노드(Node)들에 의해 자율적으로 구성되는 기반구조 없는 네트워크','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('오픈플로우(Openflow)','네트워크 장치의 컨트롤 플레인(Control Plane)과 데이터 플레인(Data Plane) 간의 연계 및 제어를 담당하는 개방형 준 인터페이스.<br>데이터 플레인(Data plane): 트래픽을 전송하는 목적을 제공하는 영역<br>컨트롤 플레인(Control plane): 데이터 영역으로 어떻게 무슨 트래픽이 흐르도록 제어하는 영역','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('SSID(Service Set Identifier)','무선랜을 통해 전송되는 패킷들의 각 헤더에 덧붙여지는 32비트 길이의 고유 식별자','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('다중화 기술','한정된 통신자원을 효율적으로 사용하는 방식으로 두 통신 지점 간에 저속의 데이터를 각각 전송하지 않고 다수의 저속채널을 하나의 전송로에 고속으로 보내는 방식. 전송설비 투자비용 절감, 통신링크 효율을 극대화, 통신회선 설비의 단순화를 가져옴.','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('슬라이딩 윈도우','수신 측에서 설정한 윈도우의 크기만큼 송신 측에서 확인 응답 없이 전송할 수 있게 하여 흐름을 동적으로 제어하는 기술','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('NFC(Near Field Communication)','RFID의 확장 기술로 10cm 이내에서 저전력, 비접촉식 무선 통신 기술.<br>RFID(Radio-Frequency Identification): 주파수를 이용해 ID를 식별하는 기술','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('WBAN(Wireless Body Area Network)','체내 혹은 인체 주변 3m 이내에서 일어나는 저비용, 저전력, 고속통신이 가능한 신체 접촉 근거리 무선 네트워크','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('MEC(Mobile Edge Computing/Cloud)','무선 기지국에 분산 클라우드 컴퓨팅 기술을 적용하여 서비스와 콘텐츠를 이용자 단말에 가까이 전개함으로써 모바일 코어 망의 혼잡을 줄이는 기술','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('코앱(CoAP; Constrained Application Protocol)','사물통신(M2M), 사물인터넷(IoT)과 같은 대역폭이 제한된 통신 환경에 최적화하여 개발된 REST기반의 경량 메시지 전송 프로토콜.<br>M2M(Machine to Machine): 네트워크를 통해 가능하게 하는 사물통신<br>REST: 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('SAN(Storage Area Network)','스토리지 디바이스의 공유 풀을 상호 연결하여 여러 서버에 제공하는 독립적인 전용 고속 네트워크','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('스몰 셀(Small Cell)','낮은 송신전력으로 좁은 커버리지를 갖는 소형 기지국이다. 스몰셀의 범주는 10W급 이하의 소출력 기지구장비, Wi-Fi 등을 통칭','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('NAT(Network Address Translation)','사설 네트워크에 속한 여러 개의 호스트가 하나의 공인 IP주소를 사용하여 인터넷에 접속하기 위한 네트워크 주소 변환 기술','netwalker', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('DBMS(Database Management System)','데이터 관리를 쉽게, 데이터추가, 변경, 검색, 삭제, 백업, 복구 보안 기능을 지원하는 기능','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('트랜잭션(Transaction)','DB 시스템에서 하나의 논리적 기능을 수행하기 위한 작업 기본 단위','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('트랜잭션 주요 특징','원자성 일관성 격리성 영속성','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('병행제어(Concurrency Control)','여러 트랜잭션 시 DB 일관성을 유지하기 위한 제어 기법','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('TPS(Transaction Per Second)','초당 트랜잭션을 처리할 수 있는지를 나타내는 성능지표','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('트랜잭션 반환시간(Turnaround Time)','프로세스들이 입력되어 수행하고 결과를 산출하기까지 소요되는 시간','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('VTL(Virtual Tape Library)','대용량 백업 및 데이터 소신에 강점이 있는 테이프 방식을 장점으로 취하기 위해 디스크를 가상의 테이프 미디어로 모방하는 방식','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('관계 대수','관계형 데이터베이스에서 원하는 정보가 무엇인가를 정의하고 원하는 정보를 유도하기 위한 과정을 정의한 절차적 언어','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('관계 해석','관계형 데이터베이스에서 원하는 정보가 무엇인지만을 정의하는 비절차적 언어','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('논리적 데이터 모델링','객체와 관계로 정의된 개념적 데이터 구조를 데이터베이스가 채택한 논리적 데이터 모델을 사용해 논리적 데이터 구조로 표현하는 과정','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('뷰(View)','데이터베이스에 존재하는 일종의 가상테이블. 실제 데이터를 가지고 있지 않은 테이블을 의미. 즉 데이터를 보여주기만 하는 테이블','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('규칙기반 옵티마이저(RBO; Rule Based Optimizer)','SQL에서 사전 등록된 규칙에 따라 질의 실행 계획을 선택하는 옵티마이저','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('다차원 데이터베이스(Multi-dimensional database)','여러 개의 속성항목을 가지고 있는 자료를 관리하는 데이터베이스. 대량의 데이터를 관리하며 독자적인 데이터 구조를 가지기 때문에 전용 클라이언트 소프트웨어가 필요하다는 단점이 있으나, 자유로운 시점에서 신속하게 데이터를 분석할 수 있다는 이점이 있음.','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('온라인 분석 처리(On-Line Analytical Processing; OLAP)','정보 위주의 분석처리. 다양한 관점에서 비즈니스 데이터를 분석하는 데 사용할 수 있는 소프트웨어 기술','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('하둡(Hadoop; High Availability Distributed Object Oriented Platform)','오픈소스 기반으로 아파치 재단에서 개발된 분산 컴퓨팅 기술. 거대한 데이터를 일반 PC 하드웨어로 클러스터화 해 병렬로 처리할 수 있도록 개발된 프레임워크.','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('스쿱(Sqoop)','커넥터(Connector)를 사용하여 관계형 데이터베이스(RDBMS)와 하둡 사이에서 데이터 이관을 지원하는 툴이다','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('피그(Pig)','대용량 데이터 집합을 분석하기 위한 플랫폼. 하둡을 이용함.','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('척와(Chukwa)','비정형 데이터 수집기술. 분산된 각 서버에서 에이전트를 실행. 컬렉터(Collector)가 에이전트로부터 데이터를 받아 HDFS에 저장. <br>HDFS(Hadoop File System): 하둡이 실행하는 파일관리 시스템','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('하이브(Hive)','하둡 기반의 DW(데이터 웨어하우스) 솔루션. SQL과 매우 유사한 HiveQL이라는 자체 쿼리를 사용함','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('데이터 마이닝 (Data Mining)','대규모 데이터를 분석해 데이터 속에 있는 변수 사이의 상호관계를 규명하여 일정한 패턴을 찾아내는 기술','majester', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('클라우드 컴퓨팅','컴퓨터 통신망이 복잡한 네트워크 및 서버 구성 등을 알 필요 없이 구름과 같이 내부가 보이지 않고, 일반 사용자는 이 복잡한 내부를 굳이 알 필요도 없이 어디에서나 구름 속의 컴퓨터 자원으로 자기가 원하는 작업을 할 수 있다는 것. 이른바 동일한 체험을, 인터넷이 연결된 어디에서나 보장해주는 것.','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('소프트웨어형 서비스 (SaaS; Software as a Service)','소프트웨어 및 관련 데이터는 중앙에 호스팅 되고 사용자는 웹 브라우저 등의 클라이언트를 통해 접속하여 소프트웨어를 서비스 형태로 이용하는 서비스','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('클라우드 접근 보안 중개 (CASB; Cloud Access Security Broker)','클라우드 서비스 이용 시 접근통제, 암호화, 로그인 등 사용자와 클라우드 사이에서 보안 기능을 수행하는 중개(Broker) 시스템','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('런타임(Runtime)','파일 과정을 마친 프로그램은 사용자에 의해 실행되며 이러한 응용 프로그램이 동작하는 시점','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('라이브러리(Library)','소프트웨어 개발 시 공통으로 사용될 수 있는 특정한 기능을 모듈화 해 제공','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('API(Application Programming Interface)','응용 프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('함수형 프로그래밍(Functional Programming)','모든 것을 순수 함수로 나누어 문제를 해결하는 기법. 자료 처리를 수학적 함수의 계산으로 취급','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('배치(Batch)','사용자와의 상호작용 없이 일련의 작업들을 작업 단위로 묶어 정기적으로 반복수행 하거나 정해진 규칙에 따라 일괄처리 프로그램','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('개발환경 인프라 구성 - 온프레미스 (On-Premise)','외부 인터넷망이 차단된 상태에서 인트라넷망 만을 이용해 leonardo','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('개발환경 인프라 구성 - 클라우드 (Cloud)','아마존, 구글, MS등 클라우드 공급 서비스 회사들의 서비스를 임대하여 leonardo','leonardo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('트러스트 존(Trust Zone)','ARM에서 개발한 기술, 하나의 프로세서 내에서 일반 애플리케이션을 처리하는 구역과 보안이 필요한 애플리케이션을 처리하는 보안구역으로 분할해서 관리하는 하드웨어 기반 보안기술','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('초소형 전자 기계 시스템','초정밀 반도체 제조 기술을 바탕으로 전자기계 소자를 육안으로는 보이지 않을 정도로 작은 크기로 제작하는 초 미세 장치','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('킬스위치 (Kill Switch)','스마트폰 이용자가 도난 당한 스마트폰의 작동을 웹사이트를 통해 정지할 수 있는 일종의 자폭기능.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('시맨틱 웹(Semantic Web)','인터넷과 같은 분산환경에서 리소스에 대한 정보와 자원 사이의 관계-의미 정보를 기계(컴퓨터)가 처리할 수 있는 온톨로지 형태로 표현하고 이를 자동화된 기계(컴퓨터)가 처리하도록 하는 지능웹','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('온톨로지(Ontology)','실세계에 존재하는 모든 개념과 개념들의 속성, 그리고 개념 간의 관계 정보를 컴퓨터가 이해할 수 있도록 서술해 놓은 개념화 명세서','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('스마트그리드(Smart Grid)','전기 및 정보통신 기술을 활용해 전력망을 지능화, 고도화. 고품질의 전력 서비스를 제공, 에너지 이용 효율 극대화.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('양자 키 분배(QKD; Quantum Key Distribution)','양자 통신을 위해 비밀키를 분배하여 관리하는 기술. 키 분배를 위해 양자 얽힘 상태 광자 또는 단일 광자를 이용','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('NDN(usernamed Data Network)','데이터의 이름을 기반으로 데이터를 전송하는 기술. 인터넷에서 콘텐츠 자체의 정보와 라우터 기능만을 이용해 목적지로 데이터를 전송하는 기술.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('엔 스크린(N-Screen)','하나의 멀티미디어 콘텐츠(영화, 음악, 등)를 N개의 기기에서 ‘연속적으로’ 자유롭게 이용할 수 있는 서비스 및 기술','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('매시업(Meshup)','웹으로 제공하고 있는 정보와 서비스를 융합해 새로운 서비스를 만드는 기술.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('서버리스 컴퓨팅(Serverless Computing)','서버가 없는 것과 같이 직접 해당 이벤트에 접근하여 처리하는 컴퓨팅 기술','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('CEP(Complex Event Processing)','실시간으로 발생하는 이벤트 처리에 대한 결과값을 수집하고 처리하는 기술로 IoT센서 데이터, 로그, 음성 데이터 등 실시간 데이터 처리 기술','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('해시 함수(Hash Function)','임의의 길이를 갖는 값을 입력 받으면 고정된 길이의 값을 출력하는 함수','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('오픈스택(OpenStack)','오픈소스 소프트웨어 기반의 클라우드 플랫폼 프로젝트. 아파치 라이선스 형태로 배포.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('쿠버네티스(Kubernetes)','리눅스 재단에 의해 관리되는 컨테이너화 된 애플리케이션의 자동배포, 스케일링 등을 제공하는 오픈 소스 기반의 관리 시스템','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('CPS(Cyber-Physical System)','가상 물리 시스템. 인간의 개입 없이 실시간으로 물리적 요소들을 제어하는 복합적 시스템.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('LMS(Learning Managements System)','LMS는 교육 과정의 전반적인 관리기능 뿐만 아니라 교육에 필요한 콘텐츠 생성 및 관리 커뮤니케이션 기능도 포함한다.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('MDM(Mobile Device Management)','언제 어디서나 모바일 기기가 Power On 상태로 있으면 원격에서 모바일 기기를 관리할 수 있는 시스템. 스마트폰, 테블릿, 휴대용 컴퓨터 같은 모바일 기기를 보호, 관리, 감시, 지원하는 등의 기능 지원 시스템','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('건물 에너지관리 시스템','건물 운영의 에너지 효율화 및 온실가스 배출량 감축을 위한 건물에너지 시스템','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('KPI(Key Performance Indicator)','KPI는 사업 부서, 혹은 개인 차원의 목표가 달성되었는지 그 실적을 추적하기 위한 정량화된 측정 지표','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('균형성과표(BSC; Balanced Score Card)','조직의 성과 목표 달성을 위하여 회사의 비전이나 전략에 따라 성과 목표를 재무, 고객, 내부 프로세스, 학습-성장 관점으로 균형 있게 목표를 제시하는 기법.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('리틀의 법칙(Little’s Law)','공간 내 머무는 객체 수 (I) = 객체의 공간 유입량 (R)*객체의 공간 내 머무는 시간 (T)','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('ITSM(IT Service Management)','정보시스템 사용자가 만족할 수 있는 서비스를 제공하고 지속적인 관리를 통해 서비스의 품질을 유지 및 증진시키기 위한 일련의 활동','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메타데이터(Metadata)','자료가 아닌 자료의 속성 등을 설명하는 데이터. 데이터에 관한 정보와 기술, 데이터 구성 등','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('메타데이터 레지스트리(MDR; Metadata Registry)','메타데이터의 등록과 인증을 통하여 표준화된 메타데이터 유지, 관리를 하고 메타데이터의 명세와 의미 공유를 목적으로 하는 데이터베이스.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('데브옵스(DevOps)','소프트웨어 개발 조직과 운영 조직간의 상호 의존과 대응. 소프트웨어 제품과 서비스를 빠른 시간에 개발 및 배포를 목적으로 함.','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('디지털 트윈(Digital Twin)','현실 세계에 존재하는 사물, 시스템, 환경 등을 S/W 시스템의 가상 공간에 동일하게 묘사, 동적 운동 특성 및 결과를 SW시스템에 모의할 수 있도록 하는 시스템','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('다크 데이터(Dark Data)','수집된 후 저장은 되어있지만 사용을 하지 않는 다량의 데이터','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('페르소나(Persona)','잠재적 사용자의 다양한 목적과 관찰된 행동 패턴을 응집시켜 놓은 가상의 사용자를 정의','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('SSO(Single Sign-On)','여러 IT 시스템에 재인증 절차없이 단일 계정으로 한번의 시스템 인증을 통해 접근 가능한 로그인 인증기술','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('마이데이터(MyData)','정보의 주체가 기관으로부터 자기 정보를 직접 내려 받아 이용하거나 제 3자 제공을 허용하는 등 정보 주체 중심의 데이터 활용체계이자 개인이 정보 관리의 주체가 되어 능동적으로 본인의 정보를 관리하고 본인의 의지에 따라 신용 및 자산관리 등에 정보를 활용하는 일련의 과정','recalo', '0');
INSERT INTO post_board (title , content , username , hit) VALUES ('디지털 아카이빙(Digital Archiving)','지속적으로 보존할 가치를 가진 디지털 객체를 장기간 관리하여 이후의 이용을 보장할 수 있도록 변환, 압축 저장해 DB화 하는 기법','recalo', '0');

-- file_board table
DROP TABLE IF EXISTS file_board;

CREATE TABLE file_board (
    idx INTEGER PRIMARY KEY AUTOINCREMENT,
    group_idx INTEGER NOT NULL,
    name TEXT NOT NULL,
    size INTEGER,
    seq INTEGER DEFAULT 0,
    datetime TEXT DEFAULT (datetime('now', 'localtime'))
) STRICT;

-- user_account table
DROP TABLE IF EXISTS user_account;

CREATE TABLE user_account (
    idx INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    manages TEXT NOT NULL,
    datetime TEXT DEFAULT (datetime('now', 'localtime'))
) STRICT;

-- user_account table data
INSERT INTO user_account (username , manages) VALUES ('admin','owner');
INSERT INTO user_account (username , manages) VALUES ('lazarus','security');
INSERT INTO user_account (username , manages) VALUES ('warmonker','PM');
INSERT INTO user_account (username , manages) VALUES ('recalo','PL');
INSERT INTO user_account (username , manages) VALUES ('kato','TA');
INSERT INTO user_account (username , manages) VALUES ('majester','DA');
INSERT INTO user_account (username , manages) VALUES ('leonardo','TA');
INSERT INTO user_account (username , manages) VALUES ('netwalker','TA');