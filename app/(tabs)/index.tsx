import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const Page = () => {
	return (
		<View>
			<Link href={'/(modals)/login'}>Login</Link>
			<Link href={'/(modals)/booking'}>Bookings</Link>
			<Link href={'/listing'}>Listing Details</Link>
		</View>
	);
};

export default Page;
