import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout() {
return (
<Stack
screenOptions={{
headerStyle: { backgroundColor: '#1a1a1a' },
headerTintColor: '#FFA500',
}}
/>
);
}