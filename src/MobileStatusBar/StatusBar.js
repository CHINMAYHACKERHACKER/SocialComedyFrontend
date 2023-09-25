import React from "react";
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
const StatusBar = () => {
    const iconSize = '17px'; // You can adjust the size as needed
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60px', // Adjust the height to match your status bar's height
                backgroundColor: 'white', // Background color of the status bar
                display: 'flex',
                alignItems: 'center',
                padding: '0 13px', // Adjust padding as needed
                color: 'black', // Text color
                fontSize: '12px', // Text size
            }}
        >
            <span style={{ fontSize: iconSize, fontWeight: "bold", fontSize: "13px" }}>10:55</span>
            <div style={{ marginLeft: '73%' }}>
                <SignalCellularAltIcon style={{ fontSize: iconSize }} />
                <WifiIcon style={{ fontSize: iconSize }} />
                <BatteryChargingFullIcon style={{ fontSize: iconSize }} />
            </div>
        </div>
    );
}

export default StatusBar;