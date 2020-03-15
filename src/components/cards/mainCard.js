import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right
} from 'native-base';
const MainCard = (props) => {
	return (
		<Container>
			<Header />
			<Content>
				<Card>
					<CardItem>
						<Left>
							<Thumbnail source={{ uri: 'Image URL' }} />
							<Body>
								<Text>NativeBase</Text>
								<Text note>GeekyAnts</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem cardBody>
						<Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} />
					</CardItem>
					<CardItem>
						<Left>
							<Button transparent>
								<Icon active name="thumbs-up" />
								<Text>12 Likes</Text>
							</Button>
						</Left>
						<Body>
							<Button transparent>
								<Icon active name="chatbubbles" />
								<Text>4 Comments</Text>
							</Button>
						</Body>
						<Right>
							<Text>11h ago</Text>
						</Right>
					</CardItem>
				</Card>
			</Content>
		</Container>
	);
};
MainCard.propTypes = {};
const styles = StyleSheet.create({});
export { MainCard };
