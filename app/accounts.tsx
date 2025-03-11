import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CircleAlert } from 'lucide-react-native';
import { View } from 'react-native';
import { ThemedText } from '~/components/ThemedText';
import { ThemedView } from '~/components/ThemedView';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { IconSymbol } from '~/components/ui/IconSymbol';
import { Text } from '~/components/ui/text';
import { bankLogos } from '~/constants/banks';
import { cn } from '~/lib/utils';

export default function Accounts() {
  return (
    <ParallaxScrollView>
      <Alert icon={CircleAlert} className='max-w-xl'>
        <AlertTitle>Atenção!</AlertTitle>
        <AlertDescription>
          Aqui estão todas as suas contas. Você pode editá-las e ajustar o saldo de cada conta caso necessário.
        </AlertDescription>
      </Alert>
      <ThemedView className={cn('flex flex-col gap-4')}>
        {bankLogos.map((bank, index) => (
          <Card>
            <CardHeader>

            </CardHeader>
            <CardContent>
              <View
                key={index}
                className={cn('flex flex-row justify-between items-center')}
              >
                <View className={cn('flex flex-row gap-4')}>
                  <Avatar className={cn('w-12 h-12')} alt={bank.name}>
                    <AvatarImage source={{ uri: bank.uri }} />
                    <AvatarFallback>
                      <Text>{bank.name[0]}</Text>
                    </AvatarFallback>
                  </Avatar>
                  <View>
                    <ThemedText type='defaultSemiBold'>{bank.name}</ThemedText>
                    <ThemedText>Conta manual</ThemedText>
                  </View>
                </View>
                <IconSymbol size={36} name="right.fill" color="green" />
                
              </View>
            </CardContent>
            <CardFooter>
<ThemedText>R$ 0,00</ThemedText>
            </CardFooter>
          </Card>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}