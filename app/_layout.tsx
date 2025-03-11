import "../global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { PortalHost } from '@rn-primitives/portal';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Função que retorna um botão de adicionar
  const AddButton = (onPress: () => void) => (
    <Pressable onPress={onPress} style={{ marginRight: 15 }}>
      <Ionicons name="add-circle-outline" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
    </Pressable>
  );

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="profile" 
            options={{
                headerTitle: 'Perfil',
              }}
            />
          <Stack.Screen
            name="accounts"
            options={{
              headerRight: () => AddButton(() => console.log('Adicionar conta de banco')),
              headerTitle: 'Contas',
            }}
          />
          <Stack.Screen
            name="cards"
            options={{
              headerRight: () => AddButton(() => console.log('Adicionar cartão')),
              headerTitle: 'Cartões',
            }}
          />
          <Stack.Screen
            name="custom-categories"
            options={{
              headerRight: () => AddButton(() => console.log('Adicionar categoria')),
              headerTitle: 'Categorias',
            }}
          />
          <Stack.Screen name="late" />
          <Stack.Screen 
            name="configurations"
            options={{
              headerTitle: 'Configurações',
            }} 
            />
          <Stack.Screen name="notifications" 
          options={{
            headerTitle: 'Notificações',
          }}/>
          <Stack.Screen name="+not-found" 
          options={{
            headerTitle: 'Página não encontrada',
          }}/>
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      <PortalHost />
    </>
  );
}
