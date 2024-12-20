/**
 * WordPress dependencies
 */
import {
	Button,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	Flex,
	FlexItem,
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
				<CardHeader style={ { display: 'block' } }>
					<Flex direction="column" as="Header">
						<Flex>
							<Flex justify="left">
								<Button icon={ chevronLeft } size="compact" />
								<Heading as="h2" level={ 3 } weight={ 500 }>
									Section title
								</Heading>
							</Flex>
							<Flex
								expanded={ false }
								style={ { flexShrink: '0' } }
							>
								<FlexItem>
									<Button
										variant="primary"
										__next40pxDefaultSize
									>
										Action
									</Button>
								</FlexItem>
								<FlexItem>
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
										toggleProps={ {
											__next40pxDefaultSize: true,
										} }
									/>
								</FlexItem>
							</Flex>
						</Flex>
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
					</Flex>
				</CardHeader>
				<CardBody>
					<Text size={ 13 }>Section body</Text>
				</CardBody>
				<CardFooter>
					<Text size={ 13 }>Section footer</Text>
				</CardFooter>
			</Card>
		);
	},
};

export const HeaderExampleHighDensity = {
	render: () => {
		return (
			<Card size="small" style={ { width: '280px' } }>
				<CardHeader>
					<Flex direction="column" as="Header">
						<Flex>
							<Flex justify="left">
								<Button icon={ chevronLeft } size="small" />
								<Flex gap={ 1 }>
									<Icon
										icon={ page }
										style={ { flexShrink: '0' } }
									/>
									<Heading
										as="h3"
										size="13px"
										weight={ 500 }
										style={ { width: 'inherit' } }
									>
										Section title
									</Heading>
								</Flex>
							</Flex>
							<Flex
								expanded={ false }
								style={ { flexShrink: '0' } }
							>
								<FlexItem>
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
								</FlexItem>
							</Flex>
						</Flex>
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
					</Flex>
				</CardHeader>
				<CardBody>
					<Text size={ 13 }>Section body</Text>
				</CardBody>
				<CardFooter>
					<Text size={ 13 }>Section footer</Text>
				</CardFooter>
			</Card>
		);
	},
};
