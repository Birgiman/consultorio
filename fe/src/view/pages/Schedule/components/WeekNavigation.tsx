import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { capitalizeFirstLetter } from '../../../../app/utils/capitalizeFirstLetters';

export function WeekNavigation() {

  const DIAS = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];
  const [dataAtual, setDataAtual] = useState(new Date());
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const avancarDia = () => {
    // Avança para o próximo dia adicionando 1 dia à data atual
    const novaData = addDays(dataAtual, 1);
    setDataAtual(novaData);
    swiper && swiper.slidePrev();
  };

  const retrocederDia = () => {
    // Retrocede para o dia anterior subtraindo 1 dia da data atual
    const novaData = addDays(dataAtual, -1);
    setDataAtual(novaData);
    swiper && swiper.slideNext();
  };


  return (
    <Swiper
      slidesPerView={1}
      initialSlide={0}
      loop={true}
      modules={[Navigation]}
      onSwiper={(s) => setSwiper(s)}
    >
      <button
        className='absolute bg-gradient-to-r from-indian-khaki-200 to-transparent left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10'
        onClick={retrocederDia}
      >
        <ChevronLeftIcon className='w-6 h-6 text-gray-800 ' />
      </button>
      {DIAS.map(index => (
        <SwiperSlide
          key={index}
        >
          <div className='tracking-tighter flex justify-center items-center'>
            <div>
              <strong className='w-fit text-lg'>{capitalizeFirstLetter(format(dataAtual, 'EEEE', {locale: ptBR}))}</strong>
              <div className='flex underline underline-offset-4'>
                <p className='flex w-fit'>{format(dataAtual, 'dd ', {locale: ptBR})} de</p>
                <span>&nbsp;</span>
                <p className='flex w-fit'>{capitalizeFirstLetter(format(dataAtual, 'LLLL yyyy', {locale: ptBR}))}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <button
        className='absolute bg-gradient-to-l from-indian-khaki-200 to-transparent right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10'
        onClick={avancarDia}
      >
        <ChevronRightIcon className='w-6 h-6 text-gray-800 ' />
      </button>
    </Swiper>
  );
}
