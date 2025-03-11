import axios from 'axios';
import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, StyleSheet, ToastAndroid } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '~/lib/utils';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const onPress = async () => {
    console.log("Botão pressionado, iniciando requisição com Axios...");
  
    try {
      const response = await axios.get('http://192.168.1.110:8000', {
        headers: { Accept: 'application/json' },
      });

      if(response.status === 200) {
        console.log("Requisição bem-sucedida!");
      }
      
  
      console.log("Resposta recebida:", response.data);
      ToastAndroid.show(`Status: ${response.status}`, ToastAndroid.SHORT);
    } catch (error) {
      console.error("Erro na requisição:", error);
  
      if (axios.isAxiosError(error)) {
        console.error("Detalhes do erro:", error.response);
        ToastAndroid.show(`Erro: ${error.response?.data || "Sem detalhes"}`, ToastAndroid.LONG);
      } else {
        ToastAndroid.show(`Erro inesperado: ${(error as Error).message}`, ToastAndroid.LONG);
      }
    }
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Fluxo de Caixa',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="dollarsign.circle.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="data"
          options={{
            title: 'Relatórios',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="chart.bar.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="expenses"
          options={{
            title: 'Limites de Gastos',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="tag.fill" color={color} />,
          }}
        />
      </Tabs>
      <View className={cn("absolute bg-transparent items-center justify-center")} style={styles.fabContainer}>
        <TouchableOpacity className={cn("items-center justify-center")} style={{ ...styles.fab, backgroundColor: Colors[colorScheme ?? 'light'].background }} onPress={onPress}>
          <IconSymbol size={30} name="plus.fill" color={Colors[colorScheme ?? 'light'].icon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    bottom: 20,
    left: '50%',
    marginLeft: -30,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
  },
});
