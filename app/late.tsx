import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { H1 } from '~/components/ui/typography';

export default function Late() {
  return (
    <ParallaxScrollView>

      <ThemedView className='flex flex-col items-center gap-4'>
        <H1>Pagamentos atrasados</H1>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}