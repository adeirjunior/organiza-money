import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { cn } from '~/lib/utils';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
        <TouchableOpacity className={cn("items-center justify-center")} style={{ ...styles.fab, backgroundColor: Colors[colorScheme ?? 'light'].background }} onPress={() => console.log('Ação')}>
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
