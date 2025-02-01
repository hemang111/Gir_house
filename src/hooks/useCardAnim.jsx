import { gsap,useGSAP,ScrollTrigger} from '../utils'

export const useCardAnim = (containerRef) => {
    useGSAP(() => {
      const cards = gsap.utils.toArray('.card');
      ScrollTrigger.create({
        trigger: cards[0],
        start: 'top 35%',
        endTrigger: cards[cards.length - 1],
        end: 'top 30%',
        pin: '.intro',
        pinSpacing: false,
      });
  
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const cardInner = card.querySelector('.card-inner');
  
        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 35%',
            endTrigger: '.outro',
            end: 'top 65%',
            pin: true,
            pinSpacing: false,
            pinType: 'transform',
            anticipatePin: 1,
          });
  
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 35%',
              endTrigger: '.outro',
              end: 'top 65%',
              scrub: true,
            },
          });
        }
      });
  
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, { scope: containerRef });
  };
  