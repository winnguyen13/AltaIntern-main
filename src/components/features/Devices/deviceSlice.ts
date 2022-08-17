import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
// import { db } from '../../config/firebase';
import { defaultDeviceState, deviceType, Ifilter, userType } from '../../constants/interface';
import { RootState } from '../../../store';

const initialState: defaultDeviceState = {
    loading: false,
    device: null,
    devices: [],
    message: {
        fail: false,
        text: "",
    },
};

export const getAll = createAsyncThunk("devices/getAll",
    async (filter?: Ifilter) => {
        let devices: deviceType[] = [];

        const queryUser = await getDocs(collection(db, "devices"));
        queryUser.forEach((value) => {
            devices.push({
                id: value.id,
                ...(value.data() as deviceType),
            });
        });
        if (filter) {
            if (filter.active !== null)
                devices = devices.filter(
                    (device) => device.isActive === filter.active
                );
            if (filter.connect !== null)
                devices = devices.filter(
                    (device) => device.isConnect === filter.connect
                );
            if (filter.keywords !== "")
                devices = devices.filter(
                    (device) =>
                        device.name
                            .toLowerCase()
                            .includes(filter.keywords?.toLowerCase()) ||
                        device.type
                            .toLowerCase()
                            .includes(filter.keywords.toLowerCase()) ||
                        device.deviceId
                            .toLowerCase()
                            .includes(filter.keywords.toLowerCase())
                );
        }
        // for (const user of users) {
        //     const roleSnap = await getDoc(doc(db, "roles", user.role as string));
        //     user.role = (roleSnap.data() as roleType).name;
        // }
        devices.reverse();
        return devices;
    });

export const add = createAsyncThunk(
    "device/add",
    async (values: deviceType) => {
        const newDevice = doc(collection(db, "devices"));
        await setDoc(newDevice, values);
        const deviceRef = doc(db, "devices", newDevice.id);
        const deviceSnap = await getDoc(deviceRef);
        return deviceSnap;
    }
);
export const get = createAsyncThunk("devices/get", async (id: string) => {
    let device: deviceType;

    const deviceSnap = await getDoc(doc(db, "devices", id));
    // const roleSnap = await getDoc(doc(db, "roles", (userSnap.data() as userType).role));
    device = {
        id,
        ...(deviceSnap.data() as deviceType),
        // role: (roleSnap.data() as roleType).name,
    };

    return device;
});

export const update = createAsyncThunk(
    "devices/updateDevice",
    async (value: deviceType) => {
        const deviceRef = doc(db, "devices", value.id as string);
        await updateDoc(deviceRef, value);
    }
);

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            if (action.payload) {
                state.devices = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(getAll.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
        builder.addCase(get.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(get.fulfilled, (state, action) => {
            if (action.payload) {
                state.device = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(get.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
        builder.addCase(update.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(update.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(update.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
    }
})
const deviceReducer = deviceSlice.reducer;

export const deviceSelector = (state: RootState) => state.deviceReducer;


export default deviceReducerimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { defaultDeviceState, deviceType, Ifilter, userType } from '../../constants/interface';
import { RootState } from '../../store';

const initialState: defaultDeviceState = {
    loading: false,
    device: null,
    devices: [],
    message: {
        fail: false,
        text: "",
    },
};

export const getAll = createAsyncThunk("devices/getAll",
    async (filter?: Ifilter) => {
        let devices: deviceType[] = [];

        const queryUser = await getDocs(collection(db, "devices"));
        queryUser.forEach((value) => {
            devices.push({
                id: value.id,
                ...(value.data() as deviceType),
            });
        });
        if (filter) {
            if (filter.active !== null)
                devices = devices.filter(
                    (device) => device.isActive === filter.active
                );
            if (filter.connect !== null)
                devices = devices.filter(
                    (device) => device.isConnect === filter.connect
                );
            if (filter.keywords !== "")
                devices = devices.filter(
                    (device) =>
                        device.name
                            .toLowerCase()
                            .includes(filter.keywords?.toLowerCase()) ||
                        device.type
                            .toLowerCase()
                            .includes(filter.keywords.toLowerCase()) ||
                        device.deviceId
                            .toLowerCase()
                            .includes(filter.keywords.toLowerCase())
                );
        }
        // for (const user of users) {
        //     const roleSnap = await getDoc(doc(db, "roles", user.role as string));
        //     user.role = (roleSnap.data() as roleType).name;
        // }
        devices.reverse();
        return devices;
    });

export const add = createAsyncThunk(
    "device/add",
    async (values: deviceType) => {
        const newDevice = doc(collection(db, "devices"));
        await setDoc(newDevice, values);
        const deviceRef = doc(db, "devices", newDevice.id);
        const deviceSnap = await getDoc(deviceRef);
        return deviceSnap;
    }
);
export const get = createAsyncThunk("devices/get", async (id: string) => {
    let device: deviceType;

    const deviceSnap = await getDoc(doc(db, "devices", id));
    // const roleSnap = await getDoc(doc(db, "roles", (userSnap.data() as userType).role));
    device = {
        id,
        ...(deviceSnap.data() as deviceType),
        // role: (roleSnap.data() as roleType).name,
    };

    return device;
});

export const update = createAsyncThunk(
    "devices/updateDevice",
    async (value: deviceType) => {
        const deviceRef = doc(db, "devices", value.id as string);
        await updateDoc(deviceRef, value);
    }
);

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            if (action.payload) {
                state.devices = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(getAll.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
        builder.addCase(get.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(get.fulfilled, (state, action) => {
            if (action.payload) {
                state.device = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(get.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
        builder.addCase(update.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(update.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(update.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });
    }
})
const deviceReducer = deviceSlice.reducer;

export const deviceSelector = (state: RootState) => state.deviceReducer;


export default deviceReducer