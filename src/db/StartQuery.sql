-- post_board table
DROP TABLE IF EXISTS post_board;

CREATE TABLE post_board  (
    idx INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    name TEXT NOT NULL,
    datetime TEXT DEFAULT (datetime('now', 'localtime')),
    hit INTEGER DEFAULT 0
) STRICT;

-- post_board table data
INSERT INTO post_board (title , content , name , hit) VALUES ('첫번째 입력글' , '첫번째 글의 내용' , 'ADMIN' ,   0);
INSERT INTO post_board (title , content , name , hit) VALUES ('두번째 입력글' , '두번째 글의 내용' , 'ADMIN' ,  10);
INSERT INTO post_board (title , content , name , hit) VALUES ('세번째 입력글' , '세번째 글의 내용' , 'ADMIN' ,  50);
INSERT INTO post_board (title , content , name , hit) VALUES ('네번째 입력글' , '네번째 글의 내용' , 'ADMIN' , 100);
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언1' , '결국 저에게 있어 적은 없습니다. 굳이 말하자면 이전에 제가 만들었던 작품들이 저의 적이지요.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언2' , '기본적으로 사람들이 재미를 느끼는 놀이는 나라에 관계없이 통할 수 있다. 사람들이 진심으로 즐겁게 느끼는 것이 무엇인지를 생각하고 제품을 만든다면 세계 어디에서도 팔 수 있다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언3' , '다른 이들과 경쟁하는 것을 생각할 때의 중요한 문제는 이미 나왔던 것을 참고하고 이를 쓰러뜨리려 하는 일입니다. 다른 회사들이 지금 하고 있는 것을 바라보기보다, 닌텐도는 독특함(Uniqueness)에 초점을 맞추고 있습니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언4' , '제가 전달하고자 하는 재미라는 것은 단순히 말하면 컨트롤러를 들고 게임을 플레이할 때 딱 알맞다는 느낌이 드는가, 그리고 그것이 플레이어를 행복하게 만드는가에 관한 것입니다. 컨트롤러와 모니터를 통해 당신은 자유롭게 새로운 경험을 할 수 있을 것입니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언5' , '모든 경험은 삶의 양식이 되기 때문에 인생에 헛된 경험은 없습니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언6' , '저 스스로는 일본의 게임을 만드는 것이 아닌, 교토의 게임을 만드는 것이 우리가 지금 하고 있는 일이라고 믿고 있습니다. 교토에서 만들어진 게임의 특색은 도쿄에서 만들어진 게임의 그것과는 차이가 있으며, 저와 같은 교토 출신의 사람은 유행을 따르는 것을 싫어하고 오히려 유행을 만들어나가는 것을 더 좋아합니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언7' , '다른 회사들은 상식적으로 타당한 비즈니스를 합니다. 그런데 그건 지루하잖아요. 같은 게임이 모든 플랫폼에 나오고 말이죠. 닌텐도는 크리에이터들이 서로 협력하고 기존에 없던 게임을 생각해낼 수 있는 환경을 원합니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언8' , '왜냐하면 그건 트렌드이고 저는 트렌드를 벗어나려고 시도하기 때문입니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언9' , '저는 기획자입니다. 저는 제 자신이 무언가를 창조한다고 생각하지 않습니다. 그보다는 사람들이 즐길 만한 제품을 만드는 것이 제 일이지요. 그것이 바로 제가 만든 게임들을 예술보다는 상품이라고 부르는 이유입니다. 단순히 아이디어를 떠올리고 구현하는 것에 대한 문제가 아니거든요. 플래너(planner)의 일은 자신에게 주어진 제약 안에서 할 수 있는 한 최고의 무언가를 만드는 것입니다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언10' , '닌텐도는 경쟁자들이 하는 일에는 별 신경을 쓰지 않는다. 재미있는 게임을 내놓자는 게임회사의 본질에 집중하면, 자연스럽게 소비자들은 우리 제품에 참여할 것이라고 믿는다.' , '미야모토 시게루' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언11' , '늦어지는 건 잠시 기다릴 뿐이다. 엿같은 건 영원히 남는다.' , '게이브 뉴웰' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언12' , '내일의 프로그래머는 미래의 마법사 입니다. 당신은 다른 사람들이 봤을 때 마법을 가지고 있는 것처럼 보일 것입니다.' , '게이브 뉴웰' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언13' , 'RPG의 3 요소는 탐험 발견 퍼즐 이다.' , '브라이언 파고' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언14' , 'RPG는 굴림이 아니라 역할로 정의되어야 한다' , '워렌 스펙터' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언15' , '게임의 스토리는 포르노의 그것과 같다.' , '존 카멕' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('게임 개발자 명언16' , '게임에서 가장 중요한 것은 콘텐츠인데, 구독 서비스가 시장 지배적인 방식이 되면 게이머들은 좋은 콘텐츠를 얻기 어려워질 것이다.' , '스벤 빈케' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언1' , '전쟁이란 또 다른 정치의 연장이다.' , '클라우제비츠' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언2' , '싸움은 만물의 아버지요, 만물의 왕이다. 그것은 어떤 사람은 신으로 만들었고 또 어떤 사람은 인간으로 만들었으며, 또 어떤 사람은 노예로 만들었고 또 어떤 사람은 자유인으로 만들었다.' , '헤라클레이토스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언3' , '전쟁, 아 끔찍한 전쟁이여!(Bella, horida bella!)' , '베르길리우스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언4' , '전쟁이란 게 무엇인지 말해주겠소. 사람을 죽일 대로 죽이다가 충분하다 싶었을 때 싸움이 끝납니다.' , '커티스 르메이' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언5' , '전쟁은 파괴의 과학이다.' , '존 애포트(목사)' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언6' , '전쟁은 누가 옳고 그른지를 결정해 주지 않는다, 다만 누가 살아남는지를 결정할 뿐이다.(War does not determine who is right. Only who is left).' , '버트런드 러셀' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언7' , '전쟁이란 너무나 중요한 것이어서 군인들에게만 맡겨놓을 수 없다.' , '조르주 클레망소' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언8' , '전쟁은 도적을 만들고, 평화는 그들을 교수형에 처한다.' , '서양 격언' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언9' , '전쟁은 왕들의 거래다.' , '존 드라이든' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언10' , '전쟁은 잔인한 것이다. 그걸 바꿀 필요는 없다. 잔인하면 잔인할수록 빨리 끝나니까.' , '윌리엄 테쿰세 셔먼' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언11' , '전쟁도 필요한 인간들에게는 정당하다.' , 'B. 버크' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언12' , '전쟁의 동력원은 무한한 자금이다.' , '키케로' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언13' , '전쟁을 하려면 세가지가 필요하다. 돈, 돈, 그리고 더 많은 돈이다.' , '잔 자코모 트리불치오' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언14' , '싸움 없는 인생은 보편적 유기체 속의 죽은 바다와 다름없다.' , '마차도 드 아시스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언15' , '1분이면 전투의 결과를 결정할 수 있고, 1시간이면 전역의 결과를 알 수 있으며, 하루면 나라의 운명을 결정할 수 있다.' , '알렉산드르 수보로프' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언16' , '장자 한 명의 죽음은 비극이요, 백만 명의 죽음(전쟁)은 통계다.' , '에리히 마리아 레마르크' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언17' , '정치는 피흘리지 않는 전쟁이고, 전쟁은 피를 흘리는 정치다.' , '마오쩌둥' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언18' , '전투를 앞둔 전사의 눈빛을 본 적이 있는 사람이라면 전쟁을 하자는 말을 하지 못할 것이다.' , '오토 폰 비스마르크' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언19' , '겪어보지 못한 자에게 전쟁이란 달콤한 것이다.(Dulce bellum inexpertis)' , '에라스뮈스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언20' , '나무가 단단하면 곧 부러지고, 군대가 강하면 곧 망할 것이다.' , '노자' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언21' , '도(道)로써 군주를 보좌하는 이는 군사로 천하를 누르고자 하지 않는다. 결과가 좋으면 될 따름이요, 군사를 쓰지는 않는다.' , '노자' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언22' , '군대란 인간을 잡는 흉기요, 전쟁은 덕을 거스르는 것이며, 장수는 죽음을 내리는 관리다. 따라서 전쟁은 부득이한 경우에만 하는 것이다.' , '위료자' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언23' , '그냥 전쟁만 멈춰줘요, 그게 전부예요.' , '시리아 난민 소년' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언24' , '그들은 노년기에 국가를 위한 아름답고 조화로운 죽음에 관하여 서술하였다. 그러나 현대전에서는 더 이상 아름답거나 조화로운 죽음은 존재하지 않는다. 당신은 아무 이유 없이 개같이 죽을 것이다.' , '어니스트 헤밍웨이' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언25' , '그들은 자신들이 하는 일이 저주받을 짓임을 추호도 의심하지 않는다. 그들은 모두 평화를 원하기 때문이다. 그러나 지금, 그들은 무엇인가? 진정 사람인가? 아니면 일부 권력을 잡은 부도덕한 사람들의 움직이는 요새나 탄창인가?' , '헨리 데이비드 소로' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언26' , '너희(미군, 남배트남군)가 우리 군인 10명을 죽일 때 우리는 너희 편 1명을 죽일 테지만 결국 지치는 것은 너희들일 것이다.' , '호찌민' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언27' , '누구나 전쟁에서 자신이 죽는다고 생각하지 않는다. 자신은 살아남아서 죽은 전우들을 묻게 될 것이라고만 생각한다. 하지만 현실은 그렇지 않다.' , '아돌프 히틀러' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언28' , '늙은이들이 전쟁을 선포한다. 그러나 싸워야 하고 죽어야 하는 것은 젊은이들이다.' , '허버트 후버' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언29' , '단순히 평화를 외친다고 해서 평화가 이루어지는 게 아니다. 평화는 그저 의미 없는 한 단어일 뿐이다. 우리에게 필요한 건 영광스러운 평화다.' , '나폴레옹 보나파르트' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언30' , '맨 먼저 전쟁을 일으킨 자에게 저주가 있으라' , '크리스토퍼 말로' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언31' , '모든 인류의 죄악의 총합은 전쟁이다.' , 'J. 그라이트' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언32' , '무기라는 것은 상서롭지 못한 기구다. 자연(物)은 그래서 이를 미워한다. 그러므로 도를 깨달은 사람은 이것을 쓰지 않는다(夫唯兵者不祥之器 物或惡之 故有道者不處)' , '노자' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언33' , '부자들이 전쟁을 선언하면 죽는 자들은 가난한 자들이다.' , '장폴 사르트르' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언34' , '언젠가는 전쟁도 없어질 것이고 군대도 없어질 것입니다. 하지만 그것이 지도자들에 의해 없어지지는 않습니다. 그들은 오히려 전쟁을 함으로써 많은 이익을 얻는 사람들입니다. 전쟁 때문에 고통을 당하면서 전쟁과 군대야말로 가장 못되고 사악한 것이라고 완전히 이해하는 순간 전쟁은 없어지는 것입니다.' , '레프 톨스토이' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언35' , '우리들 시대의 전쟁이 얼마나 무서운 해악인가가 명백하게 되었으므로 그것을 저지하기 위해서는 여하튼 수단도 강구하지 않을 수 없다. 특히 이것은 윤리적인 이유에서도 하지 않으면 안 된다. 우리들은 최근 두 차례의 대전에서 실로 무서운 비인간성의 죄를 범했다. 만약 또 전쟁이 발발한다면 다시 더 죄를 범하게 될 것이다. 그런 것은 허용될 수 없다.' , '알베르트 슈바이처' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언36' , '장래의 전쟁은 승리로 끝나는 것이 아니라 상호 전멸로 끝난다.' , '버트런드 러셀' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언37' , '전쟁에는 준우승자를 위한 이등상이 없다.' , '오마 브래들리' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언38' , '전쟁에서 어느 편이 스스로를 승자라고 부를지라도 승자는 없고 모두 패배자뿐이다.' , '네빌 체임벌린' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언39' , '전쟁은 가장 승산이 있다 해도 국가적 불행임에 틀림없다.' , 'H. V. 몰트케' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언40' , '전쟁은 우리의 환경을 최대로 파괴한다.' , '올로프 팔메' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언41' , '전쟁은 위대한 서사시와 위대한 영웅을 남기는 게 아니라 전쟁은 욕심과 자만에서 탄생되며 남는 건 눈물과 고통, 피만 남게 되는 비참한 것임을 우리는 깨달아야 한다.' , '클라우제비츠' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언42' , '전쟁은 인류가 존재하는 한 끊임없이 일어날 것이다. 신문을 읽지 않아도 그것은 알 수 있는 일이다. 정말이지 그건 슬픈 일이다. 그것은 사람이 아무리 발버둥쳐도 결국은 죽지 않으면 안 된다는 그런 슬픔과 같은 것이다. 죽음과 싸우는 일은 매우 아름답고 고상하고 존경할 만한 일이다. 전쟁을 피하기 위해서 하는 싸움도 마찬가지다.' , '헤르만 헤세' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언43' , '나 또한 자네들 자리에 있던 적이 있고 지금 자네들 기분이 어떤지 정확히 알고 있네. 자네들 가슴속에 언젠가 여기서 배운 것들을 바깥에서 써먹을 수 있으리란 희망 내지는 소망이 두근거리고 있는 건 전혀 이상한 일이 아니야. 집어치우게! 자네들은 전쟁의 끔찍한 면에 대해 전혀 모르고 있네. 전쟁을 두 번 겪어보니 확실히 알겠더군. 난 잿더미가 된 도시와 집들을 보았네. 죽어버린 얼굴로 누워 하늘을 올려다보는 수천의 시체도 보았지. 똑똑히 말해두는데, 전쟁은 지옥이야!' , '윌리엄 테쿰세 셔먼' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언44' , '전쟁은 당신이 원할 때 시작되지만, 당신이 원할 때 끝나지 않는다. 전쟁은 회피할 수 없다. 자신에게 상황이 유리하게 전개되도록 미룰 수 있을 뿐이다.' , '니콜로 마키아벨리' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언45' , '전쟁의 격렬함은 마약과도 같아서, 종종 빠져나올 수 없을 정도로 중독된다.' , '크리스 헤지스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언46' , '전쟁은 잘못을 바로잡는 데 완전히 비능률적인 수단이다. 손실을 보상하기보다는 오히려 증가시킨다.' , '토머스 제퍼슨' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언47' , '전쟁은 지휘관들이 막을 수 있는 것이 아니라 전쟁에 이유 없이 끌려온 군인들이 막을 수 있습니다. 군인들이야말로 가장 자연스럽게 전쟁을 막을 수 있습니다. 명령에 불복종하면 되기 때문입니다.' , '레프 톨스토이' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언48' , '전쟁의 첫 번째 희생자는 진실이다.(In war, truth is the first casualty)' , '아이스퀼로스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언49' , '전쟁은 무조건 없어져야 한다. 전쟁으로 희생되는 많은 아이들의 삶이 파괴되는 것을 막기 위해서라도, 도덕적 관념의 파괴를 방지하기 위해서라도 전쟁은 무조건 반대해야 한다. 아니 목숨 걸고 반대해야 한다. 전쟁을 막을 수만 있다면 지구 끝까지 가서라도 밀어붙이며 반대해야 한다.' , '이태석' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언50' , '전쟁 준비를 위해서 국민으로부터 징집되는 세금은 군대가 지켜야 할 노동의 산물을 거의 삼켜 버린다.' , '레프 톨스토이' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언51' , '제3차 세계 대전에서 이길 수 있는 유일한 방법은 전쟁을 막는 것뿐이다.' , '드와이트 D. 아이젠하워' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언52' , '제3차 세계 대전에서는 어떤 무기가 쓰일지는 모르겠지만, 제4차 세계 대전에서는 분명히 돌과 나무 막대가 쓰일 것이다.' , '알베르트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언53' , '좋은 전쟁, 나쁜 평화란 이 세상에 있었던 적이 없다.' , '벤저민 프랭클린' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언54' , '칼로써 얻은 국토는 다시 칼에 의해서 탈취당할 것이지만 괭이로써 얻은 것은 영원한 것이다.' , '테오도르 몸젠' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언55' , '평화는 폭력에 의해서 유지될 수가 없다. 그것은 오직 이해를 통해서만 유지될 수 있다.' , '알베르트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언56' , '평화로울 때는 자식이 부모를 땅에 묻는다. 전쟁이 일어나면 부모가 자식을 땅에 묻는다.' , '헤로도토스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언57' , '한 명의 장군이 공을 세우니, 일만 명의 백골이 쌓이는구나!(一將功成 萬骨枯)' , '조송' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언58' , '눈에는 눈(식의 보복)을 고집한다면 모든 세상의 눈이 멀게 될 것입니다.' , '마하트마 간디' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언59' , '핵전쟁이 일어나면 확실하고 분명해지는 사실은 거기에 남아있는 잿더미가 자본주의의 잿더미인지 공산주의의 잿더미인지 구별하지 못 한다는 것이다.' , '니키타 흐루쇼프' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언60' , '우리가 왜 죽었느냐고 누군가 묻거든 우리 아버지들에게 속아 이리 되었다 전하시오.' , '러디어드 키플링' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언61' , '전쟁은 즐거워요. 죽지만 않는다면요.' , '닉 윌리엄스 중위' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언62' , '전쟁 중 천황 폐하 만세, 대일본 제국 만세를 외치며 죽었다고들 하는데 난 그런 전우는 단 한 명도 보질 못했어요. 모두가 마지막 순간 어머니를 외치더군요.' , '하라다 가나메' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언63' , '전쟁이란, 겪어보지 않은 자에겐 감미로운 것이다. 하지만, 겪어본 자에겐 소름 끼치는 것이다.' , '핀다로스' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언64' , '전쟁은 이런 것이다.' , '스티븐 스필버그' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언65' , '국립 보건원에 예산을(Fund the National Institutes of Health)' , '미국 공군의 한 관계자' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언66' , '전쟁은 끔찍해.' , '이오시프 스탈린' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언67' , '상비군은 점차 완전히 폐지되어야 한다. 늘 전쟁을 준비하고 있는 것 같은 인상으로 다른 나라를 끊임없이 위협하기 때문이다. 상비군이 각국의 끝없는 군비 경쟁을 부추기는 요인이 되고, 그 유지에 들어가는 평화 비용이 결국 짧은 전쟁을 치르는 것보다 더 큰 부담이 된다면 상비군 존재 자체가 그 부담에서 벗어나기 위해 침략 전쟁을 벌이는 원인이 된다.' , '임마누엘 칸트' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언68' , '어떻게 그 군인들을 미워할 수 있겠니? 그들도 평범한 사람이고 똑같이 전쟁에서 죽어갔는데...' , '마리야 이바노브나 푸티나' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언69' , '누구도 전쟁을 시작하지 않는다. 아니, 제정신을 가진 사람이라면 시작하지 말아야 한다. 전쟁을 통해 무엇을 이루려고 하는지, 그리고 그것을 어떻게 실행할 것인지를 먼저 마음속에 분명히 하지 않고는 말이다.' , '카를 폰 클라우제비츠' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언70' , '전쟁에서는 승자도 패자도 없다. 오직 피해자만 있을 뿐이다.' , '미첼 델 카스티요' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언71' , '전쟁은 평화의 문제로부터의 비겁한 도망이다.' , '토마스 만' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언72' , '전투에서 패배하는 것 다음으로 비참한 것은 전투에서 승리하는 것이다.' , '아서 웰즐리' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언73' , '나는 전쟁을 가까운 거리에서 봐왔습니다. 나는 그 모든 참상을 잘 압니다. 그 정복은 타국의 땅에 뿌려진 아들들의 피와 조국을 위로해 줄 수 없었습니다. 그리고 위대한 프랑스의 황제가 그토록 많은 승리의 월계관을 쓰고무적의 군대에게 둘러싸인 채, 평화의 올리브 가지 뒤에서 한숨을 내쉬는 것 또한 보았습니다.' , '장 바티스트 베르나도트' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('전쟁 관련 명언74' , '한 명의 죽음은 비극이지만, 백만 명의 죽음은 통계다.' , '에리히 마리아 레마르크' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록01' , '한 번도 실수 해보지 않은 사람은 한 번도 새로운 것을 시도한 적이 없는 사람이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록02' , '난 미래에 대해 생각하는 법이 없다. 어차피 곧 닥치니까.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록03' , '신은 우주를 가지고 주사위 놀음을 하지 않는다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록04' , '학습을 방해한 유일한 훼방꾼은 내가 받은 교육이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록05' , '지식보다 중요한 것은 상상력이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록06' , '자신의 무지를 결코 과소평가하지 마세요.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록07' , '3차 세계대전이 어떤 무기로 치러질지 모른다. 하지만 4차 세계대전은 아마 몽둥이와 돌로 싸우게 될 것이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록08' , '내게 신이란 우주만물에 대한 나의 경외감이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록09' , '안정감을 잃어가며 성공을 쫓기보다는 조용하고 겸손한 삶을 사는 것이 더 큰 행복이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록10' , '지식인은 문제를 해결하고 천재는 이를 예방한다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록11' , '상식이란 18세까지 습득한 편견의 집합이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록12' , '우리는 아직 자연이 보여준 모습의 10만분의 1도 모른다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록13' , '모두가 비슷한 생각을 한다는 것은, 아무도 생각하고 있지 않다는 말이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록14' , '종교 없는 과학은 절름발이며, 과학 없는 종교는 장님이다. 진정한 종교는 실제의 삶이다. 우리의 영혼과, 우리가 가지고 있는 모든 선량함과 정의와 함께 살아가는 삶 자체이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록15' , '무얼 받을 수 있나 보다 무얼 주는가에 한 사람의 가치가 있다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록16' , '전쟁 중 살인은 일반적인 살인을 저지르는 것과 별반 다를 바 없다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록17' , '모든 인간은 개인으로서 존중받아야 하며, 그 누구도 우상으로 숭배해서는 안 된다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록18' , '나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록19' , '인생의 비극이란 살아가는 동안 가슴과 영혼에서 숨을 거둔 것들이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록20' , 'A가 인생의 성공이라면 A=x+y+z다. x는 일, y는 놀이, z는 입을 다물고 있는 것이다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록21' , '우리가 맞닥뜨린 중요 문제들은 우리가 문제를 만들어냈을 때와 같은 수준에선 풀리지 않는다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록22' , '인생을 살아가는 데는 오직 두 가지 방법밖에 없다. 하나는 아무것도 기적이 아닌 것처럼, 다른 하나는 모든 것이 기적인 것처럼 살아가는 것이다.  ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록23' , '어떤 지적인 바보도 사물을 더 크고 보다 복잡하게 만들 수 있다. 그러나 그 반대 편으로 나아가기 위해서는 천재의 손길과 많은 용기가 필요하다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록24' , '컴퓨터는 믿을 수 없이 빠르고, 정확하며, 멍청하다. 사람은 매우 느리고, 부정확하며, 뛰어나다. 둘이 힘을 합치면 상상할 수 없는 힘을 가질 수 있다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록25' , '어느 나이가 지나면 독서할수록 마음은 창의성으로부터 멀어진다. 너무 많이 읽고 자기 뇌를 너무 적게 쓰면 누구나 생각을 게을리 하게 된다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록26' , '나는 상상력을 자유롭게 이용하는 데 부족함이 없는 예술가다. 지식보다 중요한 것은 상상력이다. 지식은 한계가 있다. 하지만 상상력은 세상의 모든 것을 끌어안는다. ' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록27' , '가장 중요한 것은 질문을 멈추지 않는 것이다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록28' , '사회적인 여론과 다른 견해를 침착하게 표현할 수 있는 사람은 많지 않다. 또 , 자신의 눈으로 보고 자신의 마음으로 느끼는 사람은 드물다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록29' , '노력을 멈출 때까지 실패하는 법이란 없다.' , '알버트 아인슈타인' , '0');
INSERT INTO post_board (title , content , name , hit) VALUES ('아인슈타인 어록30' , '간단히 설명할 수가 없다면, 당신은 충분히 이해하지 못하고 있는 것이다.' , '알버트 아인슈타인' , '0');

file_board table
DROP TABLE IF EXISTS file_board;

CREATE TABLE file_board (
    idx INTEGER PRIMARY KEY AUTOINCREMENT,
    group_idx INTEGER NOT NULL,
    name TEXT NOT NULL,
    size INTEGER,
    seq INTEGER DEFAULT 0,
    datetime TEXT DEFAULT (datetime('now', 'localtime'))
) STRICT;