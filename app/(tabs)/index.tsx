import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import { IconSymbol } from '~/components/ui/IconSymbol';
import { Separator } from '~/components/ui/separator';
import { Link, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { GITHUB_AVATAR_URI } from '~/constants/images';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <ParallaxScrollView>

      <ThemedView className={cn('mt-10 flex flex-row justify-between items-center')}>
        <ThemedView className={cn('flex flex-row gap-4')}>
          <Link href="/profile">
            <Avatar className={cn('w-16 h-16')} alt="Zach Nugent's Avatar">
              <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
              <AvatarFallback>
                <Text>AD</Text>
              </AvatarFallback>
            </Avatar>
          </Link>
          <ThemedView>
            <ThemedText >Boa noite,</ThemedText>
            <ThemedText type="subtitle">
              Adeir Junior
            </ThemedText>
          </ThemedView>
        </ThemedView>

          <Button variant="outline" onPress={() => router.push('/notifications')}>
          <IconSymbol name="notification.fill" color={Colors[colorScheme ?? 'light'].icon} />
          </Button>
      </ThemedView>

      <ThemedView className={cn('gap-4 flex flex-row justify-between items-center')}>
        <IconSymbol size={36} name="danger.fill" color="gray" />
        <ThemedView className={cn('w-56')}>
          <ThemedText type="defaultSemiBold">Lançamentos atrasados</ThemedText>
          <ThemedText>Você tem 12 lançamentos atrasados</ThemedText>
        </ThemedView>
        <IconSymbol size={36} name="right.fill" color="green" />
      </ThemedView>

      <ThemedView>
        <ThemedView className={cn('gap-4 flex flex-row justify-between items-center')}>
          <ThemedView>
            <ThemedText>Saldo geral</ThemedText>
            <ThemedText type='subtitle'>R$ 1.000,00</ThemedText>
          </ThemedView>
          <IconSymbol name="eye.fill" color={Colors[colorScheme ?? 'light'].icon} />
        </ThemedView>

        <Separator className='my-4' />

        <ThemedView>
          <ThemedText type='subtitle'>Minhas contas</ThemedText>
          <ThemedView>
            {[...Array(6)].map((_, index) => (
              <ThemedView
                key={index}
                className={cn('mt-10 flex flex-row justify-between items-center')}
              >
                <ThemedView className={cn('flex flex-row gap-4')}>
                  <Avatar className={cn('w-12 h-12')} alt={''}>
                    <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                    <AvatarFallback>
                      <Text>AD</Text>
                    </AvatarFallback>
                  </Avatar>
                  <ThemedView>
                    <ThemedText type='defaultSemiBold'>Nuconta</ThemedText>
                    <ThemedText>Conta manual</ThemedText>
                  </ThemedView>
                </ThemedView>
                <ThemedText>R$ 0,00</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
          <Button variant="outline" onPress={() => router.push('/accounts')} className={cn('my-8')}>
            <ThemedText type='defaultSemiBold'>
              Gerenciar contas
            </ThemedText>
          </Button>
        </ThemedView>
      </ThemedView>

      <ThemedView>
        <ThemedView className={cn('gap-4 flex flex-row justify-between items-center')}>
          <ThemedView>
            <ThemedText>Todas as faturas</ThemedText>
            <ThemedText type='subtitle'>R$ 0,00</ThemedText>
          </ThemedView>
          <IconSymbol name="eye.fill" color={Colors[colorScheme ?? 'light'].icon} />
        </ThemedView>

        <Separator className='my-4' />

        <ThemedView>
          <ThemedText type='subtitle'>Meus cartões</ThemedText>
          <ThemedView>
            {[...Array(3)].map((_, index) => (
              <ThemedView
                key={index}
                className={cn('mt-10 flex flex-row justify-between items-center')}
              >
                <ThemedView className={cn('flex flex-row gap-4')}>
                  <Avatar className={cn('w-12 h-12')} alt={''}>
                    <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                    <AvatarFallback>
                      <Text>AD</Text>
                    </AvatarFallback>
                  </Avatar>
                  <ThemedView>
                    <ThemedText type='defaultSemiBold'>Cartão Físico Nubank</ThemedText>
                    <ThemedText>Cartão manual</ThemedText>
                  </ThemedView>
                </ThemedView>
                <ThemedText>R$ 0,00</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
          <Button variant="outline" className={cn('my-8')}>
            <ThemedText type='defaultSemiBold'>
              Gerenciar cartões
            </ThemedText>
          </Button>
        </ThemedView>
      </ThemedView>

      <ThemedView className={cn('gap-4 flex flex-row justify-between items-center')}>
        <IconSymbol size={36} name="folder.fill" color="gray" />
        <ThemedView className={cn('w-56')}>
          <ThemedText type="defaultSemiBold">Personalizar categorias</ThemedText>
          <ThemedText>Toque aqui para criar e editar suas categorias.</ThemedText>
        </ThemedView>
        <IconSymbol size={36} name="right.fill" color="green" />
      </ThemedView>

      <ThemedView className={cn("my-8")}/>

    </ParallaxScrollView>
  );
}
