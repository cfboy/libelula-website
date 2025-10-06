// import { ReactComponent as LibelulaIcon } from "../assets/libelula-icon.svg";
import { ReactComponent as LibelulaSymbol } from "../assets/libelula-symbol.svg";

const Spinner = () => (
	<div className="flex items-center justify-center min-h-screen">
		<div className="relative">
			{/* Spinning border */}
			{/* <div className="animate-spin rounded-full h-24 w-24 border-4 border-primary-green border-t-secondary-green"></div> */}
			{/* Static icon in the center */}
			{/* <div className="absolute inset-0 flex items-center justify-center">
				<LibelulaSymbol className="w-16 h-16 text-dark-green animate-pulse" />
			</div> */}

			{/* <div className="animate-spin rounded-full h-24 w-24 border-4 border-primary-green border-t-secondary-green"></div> */}
			{/* Static icon in the center */}
			<div className="flex items-center justify-center">
				<LibelulaSymbol className="w-20 h-20 text-dark-green animate-pulse" />
			</div>
		</div>
	</div>
);

export default Spinner;
