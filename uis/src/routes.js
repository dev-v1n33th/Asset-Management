import Dashboard from 'layouts/dashboard';
import Notifications from 'layouts/notifications';
import Profile from 'layouts/profile';
import SignIn from 'layouts/authentication/sign-in';
import Branch from 'layouts/branch/index';
import RoomAvailability from 'layouts/roomAvailibity';
import AddingSecurityDeposits from 'layouts/SetSecurityDeposit';

// import BulkImport from 'layouts/bulkImport';
// import Expenses from 'layouts/expenses';
import Icon from '@mui/material/Icon';
// import PaymentModules from 'layouts/payments';
// import Tracker from 'layouts/roomavailabilitytracker';
import BuildingsTracker from 'layouts/roomavailabilitytracker/buildings';
import ForgotBasic from 'layouts/authentication/forgot-password'
import Cover from 'layouts/authentication/reset-password/cover'
import InNotices from 'layouts/upcomingCheckouts';
import ArchivedGuests from 'layouts/archivedCheckouts';
import AllTransactions from 'layouts/allTrasactions';
import GuestReportMain from "./layouts/GuestReport/index"
import ConfigSecurityDeposit from "./layouts/cofigSecurityDeposit/Components/ConfigSecurityDeposit"
import ConfigSecurityDeposits from 'layouts/cofigSecurityDeposit/Components';
import PastGuest from 'layouts/profile/indexforpastGuest';
import PendingPayments from 'layouts/pendingPayments' ;
import ConfigRentsIndex from 'layouts/configRents';
import MonthlySummary from 'layouts/MonthlySummary';
// import EditGuestDetailsScreen from 'layouts/roomavailabilitytracker/buildings/EditGuestDetails';
// imports of Asset Managements
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ComputerIcon from '@mui/icons-material/Computer';
import TerminalIcon from '@mui/icons-material/Terminal';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import DigitalAssetManagementScreen from 'layouts/digitalAssetManagement';
import HardwareAssetManagementScreen from 'layouts/hardwareAssetManagement';
import SoftwareAssetManagementScreen from 'layouts/softwareAssetManagement';
import MobileAssetManagementScreen from 'layouts/mobileAssetManagement';
import AdminPanelScreen from 'layouts/AdminPanel';
import DepartmentsScreen from 'layouts/Departments';
import VendorsScreen from 'layouts/Vendors';
import ReportsScreen from 'layouts/Reports';
import UserManagementScreen from 'layouts/UserManagement';
import ImageAssetsScreen from 'layouts/ImageAssets';


const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize="small">dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard authorized={true}/>
	},
	// {
	// 	type: 'collapse',
	// 	name: 'Inventory',
	// 	key: 'tracker',
	// 	icon: <Icon fontSize="small">home</Icon>,
	// 	route: '/tracker',
	// 	component:<BuildingsTracker />
	// },
	{
		type: 'collapse',
		name: 'Digital Assets',
		key: 'digitalassetmanagement',
		icon: <SdStorageIcon />,
		route: '/digitalassetmanagement',
		component:<DigitalAssetManagementScreen />
	},
	{
		type: 'collapse',
		name: 'Hardware Assets',
		key: 'hardwareassetmanagement',
		icon: <ComputerIcon />,
		route: '/hardwareassetmanagement',
		component:<HardwareAssetManagementScreen />
	},
	{
		type: 'collapse',
		name: 'Software Assets',
		key: 'softwareassetmanagement',
		icon: <TerminalIcon />,
		route: '/softwareassetmanagement',
		component:<SoftwareAssetManagementScreen />
	},
	{
		type: 'collapse',
		name: 'Mobile Assets',
		key: 'mobileassetmanagement',
		icon: <StayCurrentPortraitIcon />,
		route: '/mobileassetmanagement',
		component:<MobileAssetManagementScreen />
	},
	// {
	// 	type: 'collapse',
	// 	name: 'Panel for Admin',
	// 	key: 'adminPanel',
	// 	icon: <Icon fontSize="small">home</Icon>,
	// 	route: '/adminPanel',
	// 	component:<AdminPanelScreen />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Departments',
	// 	key: 'departments',
	// 	icon: <Icon fontSize="small">home</Icon>,
	// 	route: '/departments',
	// 	component:<DepartmentsScreen />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Vendors',
	// 	key: 'vendors',
	// 	icon: <Icon fontSize="small">home</Icon>,
	// 	route: '/vendors',
	// 	component:<VendorsScreen />
	// },
	{
		type: 'collapse',
		name: 'Users',
		key: 'userManagement',
		icon: <Icon fontSize="small">person</Icon>,
		route: '/userManagement',
		component:<UserManagementScreen />
	},
	// {
	// 	type: 'collapse',
	// 	name: 'Reports',
	// 	key: 'reports',
	// 	icon: <ReceiptIcon />,
	// 	route: '/reports',
	// 	component:<ReportsScreen />
	// },
	{
		type: 'collapse',
		name: 'Image Assets',
		key: 'imageAssets',
		icon: <PhotoSizeSelectActualIcon />,
		route: '/imageAssets',
		component:<ImageAssetsScreen />
	},
	// {
	// 	type: 'collapse',
	// 	name: 'Guest Onboarding',
	// 	key: 'profile',
	// 	icon: <Icon fontSize="small">person_add</Icon>,
	// 	route: '/profile',
	// 	component: <Profile />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Past Guest Onboarding',
	// 	key: 'pastguestprofile',
	// 	icon: <Icon fontSize="small">person</Icon>,
	// 	route: '/pastguestprofile',
	// 	component: <PastGuest />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Payments',
	// 	key: 'payments',
	// 	icon: <Icon fontSize="small">payment</Icon>,
	// 	route: '/payments',
	// 	component: <PaymentModules />
	// },
	


	// {
	// 	type: 'collapse',
	// 	name: 'Rooms Details',
	// 	key: 'room_Details',
	// 	icon: <Icon fontSize="small">person</Icon>,
	// 	route: '/room_Details',
	// 	component: <RoomAvailability />
	// },

	// {
	// 	type: 'collapse',
	// 	name: 'Rooms Details',
	// 	key: 'room_Details',
	// 	icon: <Icon fontSize="small">home</Icon>,
	// 	route: '/room_Details',
	// 	component: <RoomAvailability />
	// },

	// {
	// 	type: 'collapse',
	// 	name: 'Reports',
	// 	key: 'reports',
	// 	icon: <Icon fontSize="small">receipt_long</Icon>,
	// 	route: '/reports',
	// 	component: <Notifications />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'branch',
	// 	key: 'branch',
	// 	icon: <Icon fontSize="small">buildigs</Icon>,
	// 	route: '/branch',
	// 	component: <Branch />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'INCIDENTS',
	// 	key: 'incidents',
	// 	icon: <Icon fontSize="small">upcomingcheckout</Icon>,
	// 	route: '/incidents',
	// 	component: <InNotices />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Archived Guests',
	// 	key: 'archivedGuests',
	// 	icon: <Icon fontSize="small">archive</Icon>,
	// 	route: '/archivedGuests',
	// 	component: <ArchivedGuests />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Monthly Summary',
	// 	key: 'monthlySummary',
	// 	icon: <Icon fontSize="small">Important</Icon>,
	// 	route: '/monthlySummary',
	// 	component: <MonthlySummary />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Configuration Management',
	// 	key: 'allTransactions',
	// 	icon: <Icon fontSize="small">payments</Icon>,
	// 	route: '/allTransactions',
	// 	component: <AllTransactions />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Organisation Management',
	// 	key: 'PendingPayments',
	// 	icon: <Icon fontSize="small">manypersons</Icon>,
	// 	route: '/pendingpayments',
	// 	component: <PendingPayments />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Miscellanous',
	// 	key: 'guestData',
	// 	icon: <Icon fontSize="small">manypersons</Icon>,
	// 	route: '/guestData',
	// 	component: <GuestReportMain />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Set Defaults',
	// 	key:'configSecurityDeposit',
	// 	icon:<Icon fontSize="small">send</Icon>,
	// 	route:'/configure',
	// 	component:<ConfigSecurityDeposits />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Advanced Analytics',
	// 	key:'addingSecurityDeposits',
	// 	icon:<Icon fontSize="small">send</Icon>,
	// 	route:'/securityConfiguration',
	// 	component:<AddingSecurityDeposits />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Setup',
	// 	key:'configRents',
	// 	icon:<Icon fontSize="small">buildigs</Icon>,
	// 	route:'/configRents',
	// 	component:<ConfigRentsIndex />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'BulkImport',
	// 	key: 'bulk_Import',
	// 	icon: <Icon fontSize="small">person_add</Icon>,
	// 	route: '/bulk_Import',
	// 	component: <BulkImport />
	// },
	// {
	// 	type: 'collapse',
	// 	name: 'Expenses',
	// 	key: 'expenses',
	// 	icon: <Icon fontSize="small">S</Icon>,
	// 	route: '/expenses',
	// 	component: <Expenses />
	// },

	
	{
		type: 'collapse',
		name: 'Sign Out',
		key: 'sign-out',
		icon: <Icon fontSize="small">logout</Icon>,
		route: '/authentication/sign-in',
		component: <SignIn />
	},
	// {
	// 	type: 'main',
	// 	name: 'Edit Guest',
	// 	key: 'editGuest',
	// 	icon: <Icon fontSize="small">logout</Icon>,
	// 	route: '/editGuest',
	// 	component: <EditGuestDetailsScreen />
	// },
	{
		type: 'main',
		name: 'Forgot Password',
		key: 'forgot-password',
		icon: <Icon fontSize="small">Forgot Password</Icon>,
		route: '/forgotPassword',
		component: <ForgotBasic />
	},
	{
		type: 'main',
		name: 'Reset Password',
		key: 'reset-password',
		icon: <Icon fontSize="small">login</Icon>,
		route: '/resetPassword',
		component: <Cover />
	},
	// {
	// 	type: 'main',
	// 	name: 'Room Availability Tracker',
	// 	key: '/tracker/sreekalanilayam',
	// 	icon: <Icon fontSize="small">booking</Icon>,
	// 	route: '/tracker/sreekalanilayam',
	// 	component:<BuildingsTracker buildingName = "Sree Kala Nilayam"/>
	// },
	

	
	
	
	
];
export default routes;