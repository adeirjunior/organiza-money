import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { H1, H2, H3, H4 } from '~/components/ui/typography';
import { GITHUB_AVATAR_URI } from '~/constants/images';

export default function Profile() {
  return (
    <ParallaxScrollView>

      <ThemedView className='flex flex-col items-center gap-4'>
        <Avatar className={cn('w-24 h-24')} alt="Zach Nugent's Avatar">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>AD</Text>
          </AvatarFallback>
        </Avatar>
        <ThemedText type="defaultSemiBold">Adeir do Bom Fim Junior</ThemedText>
        <Button variant="outline"><ThemedText>Editar perfil</ThemedText></Button>
      </ThemedView>

      <ThemedView className='flex flex-col gap-4'>
        <H4>Configure</H4>
        <ThemedText type="defaultSemiBold">Adeir do Bom Fim Junior</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}