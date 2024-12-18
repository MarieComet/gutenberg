/**
 * WordPress dependencies
 */
import {
	Button,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	DropdownMenu,
} from '@wordpress/components';

import { Icon, moreVertical, page, chevronLeft } from '@wordpress/icons';

const meta = {
	tags: [ 'docs-only' ],
};
export default meta;

export const HeaderExampleLowDensity = {
	render: () => {
		return (
			<Card size="large">
				<CardHeader>
					<VStack
						spacing={ 0 }
						style={ { width: '100%' } }
						as="header"
					>
						<HStack alignment="top">
							<Button
								icon={ chevronLeft }
								style={ { flexShrink: '0' } }
								__next40pxDefaultSize
							/>
							<Heading
								as="h2"
								level={ 3 }
								weight={ 500 }
								style={ { width: 'inherit' } }
							>
								Section title
							</Heading>
							<HStack
								expanded={ false }
								style={ { flexShrink: '0' } }
							>
								<Button
									variant="primary"
									style={ { flexShrink: '0' } }
									__next40pxDefaultSize
								>
									Action
								</Button>
								<DropdownMenu
									controls={ [
										{
											onClick: () => {},
											title: 'Action',
										},
										{
											onClick: () => {},
											title: 'Action',
										},
									] }
									icon={ moreVertical }
									label="More actions"
									onToggle={ () => {} }
									style={ { flexShrink: '0' } }
									toggleProps={ {
										__next40pxDefaultSize: true,
									} }
								/>
							</HStack>
						</HStack>
						<Text
							variant="muted"
							as="p"
							style={ { maxWidth: '600px' } }
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam sollicitudin mauris tellus, vitae tempor
							urna eleifend vel. Curabitur porttitor vulputate
							nulla, a mollis enim condimentum convallis.
						</Text>
					</VStack>
				</CardHeader>
				<CardBody>Section body</CardBody>
				<CardFooter>Section Footer</CardFooter>
			</Card>
		);
	},
};

export const HeaderExampleHighDensity = {
	render: () => {
		return (
			<Card size="small" style={ { width: '280px' } }>
				<CardHeader>
					<VStack
						spacing={ 0 }
						style={ { width: '100%' } }
						as="header"
					>
						<HStack alignment="top">
							<Button
								icon={ chevronLeft }
								style={ { flexShrink: '0' } }
								size="small"
							/>
							<Icon icon={ page } style={ { flexShrink: '0' } } />
							<Heading
								as="h3"
								size="13px"
								weight={ 500 }
								style={ { width: 'inherit' } }
							>
								Section title
							</Heading>
							<HStack
								expanded={ false }
								style={ { flexShrink: '0' } }
							>
								<DropdownMenu
									controls={ [
										{
											onClick: () => {},
											title: 'Action',
										},
										{
											onClick: () => {},
											title: 'Action',
										},
										{
											onClick: () => {},
											title: 'Action',
										},
									] }
									icon={ moreVertical }
									label="More actions"
									onToggle={ () => {} }
									style={ { flexShrink: '0' } }
									toggleProps={ { size: 'small' } }
								/>
							</HStack>
						</HStack>
						<Text
							variant="muted"
							as="p"
							style={ { maxWidth: '600px' } }
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam sollicitudin mauris tellus, vitae tempor
							urna eleifend vel. Curabitur porttitor vulputate
							nulla, a mollis enim condimentum convallis.
						</Text>
					</VStack>
				</CardHeader>
				<CardBody>Section body</CardBody>
				<CardFooter>Section Footer</CardFooter>
			</Card>
		);
	},
};
