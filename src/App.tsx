import { motion, useScroll, useTransform } from 'framer-motion';
import './reset.css';
import { pieceNormalizeFunction, quadraticFunction } from './utils';

const Y_RATIO = 10;

function App() {
  const { scrollYProgress } = useScroll();
  const firstImageScale = useTransform(
    scrollYProgress,
    (value) => (-1 / 2) * (value * (value - 2)) + 1
  );
  const firstTextOpacity = useTransform(scrollYProgress, (value) =>
    pieceNormalizeFunction(1, 2, false)(value * Y_RATIO)
  );
  const firstBgOpacity = useTransform(scrollYProgress, (value) =>
    quadraticFunction(2, 8, -1 / 16)(value * Y_RATIO)
  );
  const secondBgOpacity = useTransform(scrollYProgress, (value) =>
    pieceNormalizeFunction(6, 8)(value * Y_RATIO)
  );
  const secondText1Opacity = useTransform(scrollYProgress, (value) =>
    pieceNormalizeFunction(3, 4)(value * Y_RATIO)
  );
  const secondText1Y = useTransform(
    scrollYProgress,
    (value) => pieceNormalizeFunction(3, 4, false)(value * Y_RATIO) * 120
  );
  const secondText2Opacity = useTransform(scrollYProgress, (value) =>
    pieceNormalizeFunction(3.5, 4.5)(value * Y_RATIO)
  );
  const secondText2Y = useTransform(
    scrollYProgress,
    (value) => pieceNormalizeFunction(3.5, 4.5, false)(value * Y_RATIO) * 120
  );

  const secondText3Opacity = useTransform(scrollYProgress, (value) =>
    pieceNormalizeFunction(4, 5)(value * Y_RATIO)
  );
  const secondText3Y = useTransform(
    scrollYProgress,
    (value) => pieceNormalizeFunction(4, 5, false)(value * Y_RATIO) * 120
  );

  return (
    <>
      <div style={{ height: '1000vh', position: 'relative' }}>
        <div style={{ position: 'sticky', height: '100vh', top: 0 }}>
          <div
            style={{
              top: 0,
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                width: '100vw',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg")`,
                backgroundSize: 'cover',
                scale: firstImageScale,
              }}
            />
          </div>

          <motion.div
            initial={{ transform: 'translateY(80px)' }}
            animate={{ transform: 'translateY(0)' }}
            style={{
              color: 'white',
              paddingTop: '300px',
              position: 'absolute',
              top: 0,
              width: '100vw',
              height: '100vh',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              fontSize: '80px',
              lineHeight: '100px',
              fontWeight: '700',
              opacity: firstTextOpacity,
            }}
          >
            {'당신도 깊게 몰입했던\n무언가가 있나요?'}
          </motion.div>
          <motion.div
            style={{
              backgroundColor: 'black',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              opacity: firstBgOpacity,
            }}
          ></motion.div>
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              color: 'white',
              fontSize: '32px',
              lineHeight: '48px',
              fontWeight: '600',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              gap: '40px',
            }}
          >
            <motion.div
              style={{ opacity: secondText1Opacity, y: secondText1Y }}
            >
              {
                '시간 가는 줄 모르고 무엇에 빠져드는 경험.\n함께 한 방향으로 달려가는 느낌.\n해냈을 때의 쾌감과 기쁨.'
              }
            </motion.div>
            <motion.div
              style={{ opacity: secondText2Opacity, y: secondText2Y }}
            >
              {
                '이 몰입의 경험을 일에서 느낀다면 어떨까요?\n일을 방해하는 요소가 없다면 어떨까요?'
              }
            </motion.div>
            <motion.div
              style={{ opacity: secondText3Opacity, y: secondText3Y }}
            >
              {
                '토스커뮤니티에 모인 사람들은\n일에 몰입하는 즐거움과 성장의 기쁨을 느끼며,\n새로운 역사를 만들고 있습니다.'
              }
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: 0,
              width: '100vw',
              height: '100vh',
              opacity: secondBgOpacity,
            }}
          ></motion.div>
        </div>
        <div style={{ position: 'absolute', top: '900vh', width: '100vw' }}>
          <div>누구나 가진 몰입의 힘을 믿습니다</div>
          <div>
            만약 누군가의 몰입이 없었다면, 모두를 위한 새로운 혁신은 없었을
            것입니다.
          </div>
          <div>
            토스커뮤니티에서는 누구나 각자의 방식으로 몰입할 수 있습니다.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
