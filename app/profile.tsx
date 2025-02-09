import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import { H4, P } from '~/components/ui/typography';
import { GITHUB_AVATAR_URI } from '~/constants/images';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { IconSymbol } from '~/components/ui/IconSymbol';

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
        <Link href="/accounts"><ThemedText>Contas</ThemedText></Link>
        <Link href="/custom-categories"><ThemedText>Categorias</ThemedText></Link>
        <Link href="/cards"><ThemedText>Cartões de Crédito</ThemedText></Link>
      </ThemedView>

      <View className='flex flex-row gap-4 items-center bg-yellow-600 p-4 rounded-lg'>
        <IconSymbol size={30} color='white' name='diamond.fill' />
        <View>
          <H4>Você está no plano Anual</H4>
        <P>Renova em 25/10/2025</P>
        </View>
      </View>
      
    </ParallaxScrollView>
  );
}