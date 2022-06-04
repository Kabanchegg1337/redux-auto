import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addPart = createAsyncThunk(
    'parts/addPart',
    async (part, {rejectWithValue}) => {
        try {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            })
            if (part.expectedStatus === 'error') throw new Error('System error!')
            return part;
        }
        catch(error) {
            return rejectWithValue();
        }
    }
)

export const partsSlice = createSlice({
    name: "parts",
    initialState: {
        status: null,
        data: [
            {
                id: 1,
                name: "Капот",
                expectedStatus: "success",
                damaged: true,
                path: "M264.33,521.68c-5.53,3.29-4.56,7.55-4.29,11.17,3.12,42.12,1.33,84.31,1.78,126.46.12,11.36-.22,22.69,1.28,34.05,2.14,16.2-6.23,27-24.09,26.17-17.68-.79-34.52-6.58-52.29-6.79-22.05-.27-43.49-6.33-65.72-7.3-24.74-1.09-39.76-14-37.65-42.85,1.15-15.79.47-31.71.49-47.57q.07-62.85,0-125.71c0-4.48-.23-9,1.32-13.34,2.64-7.38,7-12,15.69-12.06,29-.14,57.85.26,86.65,4.64,15,2.27,30.38,1.82,45.6,2.4,3,.12,7-.43,6.76-4.17-.21-3.58-4.23-2.35-6.68-2.43-6.88-.22-13.76-.26-20.64-.19-19.1.2-37.71-3.73-56.52-6.16-14.14-1.83-28.69-1.36-43-.78-9.45.38-16.6-4.28-24.26-8.08-4-2-4.37-6.51-4.42-10.25-.28-22.15-.28-44.29-.24-66.44,0-5.05,2.26-8.17,7.8-9.2,7-1.3,14.35-1.8,21.12-3.57,15.46-4,30.09-10.15,42.2-21.55,8.35-7.86,14.39-17.32,20.87-26.42,5.31-7.47,9.18-16.86,9.53-25.65.81-20.36,3.53-40.9-5.92-60.84-7.19-15.15-17.57-26.79-30-37.2-10.84-9.08-24.25-13.28-36.82-19-5.57-2.52-11.83-1-17.77-1.29-9.63-.4-13.41-2.9-12.42-12.15,1.58-14.73-1.18-29.24-.43-43.87,1-20.62,12.39-30.39,32.92-32.37,17.43-1.68,34.09,1.86,50.53,5,10.68,2,22.37,6,31,14.63,3.74,3.76,8.34,6.67,12.63,9.85,18.2,13.51,18.73,34.12,21.88,53.79,4,25.26,3.92,51,7.81,76.18,3,19.39,4.8,38.85,6.71,58.34,2.74,27.81,6.37,55.53,9.39,83.31,1.78,16.33,3.09,32.7,4.63,49.06.27,2.91-.41,6.55,2.93,7.9,3.08,1.24,4.32-2.52,6.55-3.62,10.1-5,10.32-13.55,10.33-23.31.09-61,4.22-121.94,4.32-183,0-22.56.56-45.36,2.52-68,1.12-12.86,6.9-22.27,17.6-28.41,20.82-11.95,43.42-19.72,66.32-26.57,13.93-4.16,27.87-8.13,42.12-11.26,18.74-4.12,37.8-5.13,56.6-8.17,26.15-4.23,52-.52,77.64,2.58,45.16,5.46,88.43,19,129.92,37.68,19.25,8.68,28.06,24.26,29,45.44,1.72,37.07-.65,74.24,1.86,111.17,3.07,45.43,2.28,90.85,3.44,136.27.15,5.87,1.62,10.29,7,13.34s7.81,9.72,14,12.45c.54-1.1,1.28-1.87,1.23-2.59-1.43-20.09,2.55-39.91,4.77-59.61,4.12-36.49,6.44-73.15,11.23-109.56,3.38-25.74,5.14-51.68,8.09-77.48,2.09-18.3,3.57-36.85,7.81-54.7C771,115.35,790,101.32,811.75,91.29c21.46-9.88,44.55-9.76,67.62-8.9,18.45.69,25.31,15.24,26.49,29.42s.2,28.71.25,43.08c0,6.34-3.07,9.08-9.32,9.42-31.26,1.7-57.37,14.62-76.13,39.43-16.77,22.21-24.07,48.19-19.59,76.11,5.82,36.28,26,62.09,59.37,77.81,11.29,5.32,23.64,5.64,35.37,8.76,5.05,1.34,7.14,3.1,7.1,8.18-.14,20.65.08,41.31-.25,62-.14,9.17-7.6,16.61-17.77,16.72-22.14.22-44,3.42-66.09,4.74-19.31,1.16-38.65,2.25-58,3.13-4.3.2-10.39,1.12-10.21,6.05.2,5.91,6.16,6.1,11.23,5.76,32.19-2.12,64.3-5.4,96.6-5.8,6.52-.08,13-1.62,19.54-2.53,14.12-2,22,5.05,25.36,18.76,3.47,14.29,2.55,28.49,2.61,42.75.21,44,0,88,.14,132a78.44,78.44,0,0,1-4.9,26.18c-5.4,15.41-20.37,16.45-33.36,18.26C830,707.84,792,712.1,754.05,716.75c-16.5,2-23.83-4.25-23.83-20.61,0-27.54-2.11-55.32.84-82.54,2.8-25.74,1.2-51.29,2.41-76.89.11-2.39,0-4.79-.07-7.18-.13-3.06-.45-7-4-6.93s-2.47,4.15-2.53,6.59c-1.28,50.52-4.38,101-3.78,151.57.09,8.12-.87,16.1-1.83,24.12-1,7.86-5.59,12.71-12.82,14.41-14.75,3.46-29.54,7.12-44.82,7.33-7.24.1-13.6,4.1-21,3.76-10.48-.47-12.75-2.15-12.94-12.48-.29-15.08,3.73-29.45,6.57-44.1,5.41-27.95,14.65-54.63,24.48-81.15a293.41,293.41,0,0,1,44.23-79.54c3-3.8,1-5.22-1.59-7-3.44-2.41-6.92-4-9.66.94-3.48,6.27-6.86,12.6-10.37,18.85-5.12,9.12-10.12,18.33-15.53,27.28-7.4,12.22-18.8,15.26-31.53,8.81-36.36-18.41-75.32-26.39-115.66-27.73-34.07-1.14-68.21-1.19-101.83,5.86a301.08,301.08,0,0,0-65.94,22.1c-13.69,6.39-21.71,3.27-29-9.51-8.25-14.52-17.11-28.7-25.67-43.05-2.92-4.89-6.35-8.16-11.92-3.6s.1,7.19,2.23,10.1c22.27,30.42,37.72,64.29,50.28,99.57,8.42,23.65,14.08,48.12,19.11,72.65a283,283,0,0,1,4.24,28.19c1,10-3.07,14.35-13,13.48-13.57-1.2-27-3.57-40.5-5.79-8.5-1.41-17.06-2.25-25.51-4.41-9.05-2.32-12.63-8.13-14.19-16.3a17.78,17.78,0,0,1-.12-3.58c.26-57.07-5.83-114-3.75-171.12A59.55,59.55,0,0,0,264.33,521.68Zm28.75-366.11c3.87-1,5.31-1.27,6.61-1.82,27.22-11.4,55-21.12,83.84-27.52,10.75-2.39,21.54-4.39,29.63,5.79,7.58,9.55,6.25,20.06,1.85,30.41-4.95,11.63-14.73,16.63-26.6,18.68-31.91,5.52-62.87,13.61-90.32,32-5.74,3.84-7.42,8.11-7.65,14.69-1.14,33.4.93,66.75-2.58,100.26-3.12,29.91-.87,60.38-1.05,90.6,0,4.25,1,8,5.35,9.34,6.5,2,10.78,6.68,13.94,12,4.13,7,10.18,7.64,16.16,5,11.28-4.92,23-8.14,34.73-11.64,30.39-9.1,61.7-15.13,93-17,35-2.13,70.22-2.93,105.47,2,38.92,5.39,77,13.11,113.92,26.55,6.93,2.52,12.26,1.31,15.61-5.77,1.85-3.9,4.64-7.65,8.66-8.72,11.45-3.05,12.49-11.11,11.24-20.76-3.58-27.68-1.16-55.55-2.5-83.33-1.75-36.42-2-72.91-2.9-109.37-.09-3.93-1.52-6.34-5-8.63-21.68-14.25-45.9-20.63-71.17-24.35-12.88-1.89-26.36-1.39-37.93-9.22-11.11-7.53-16.53-25-11.2-37.6,5-11.69,14.43-15.59,30.16-11.8,26.93,6.48,53.38,14.5,79,25.23,3.84,1.61,9.4,6.41,11.4,3.06,2.53-4.25-2.84-9-6.19-12.77a14.55,14.55,0,0,0-4.29-3.2c-9.33-4.72-18.42-10.14-28.16-13.82-38.23-14.42-77.18-26-118.16-30-40.7-4-81.2-2.79-121.21,5C381.86,105.57,348.41,117.46,316,132,306,136.38,299.29,144,293.08,155.57ZM898.61,578.76c0-29.63.07-59.26,0-88.9,0-12-6.21-17.6-18.19-18.45-9.48-.67-18.28,3.67-27.44,3.24-28.75-1.37-57.07,5.37-85.79,4-6.63-.31-8.91,2.21-5.65,8.65a61.46,61.46,0,0,1,4.65,11.61c5.37,20-1.77,30-22.16,31.22-3,.18-6.79,1.31-5.42,4.07,4,8-.77,15.18-.77,22.73,0,47-.16,94-.18,141,0,9.88,3.32,12.86,13.29,11.46,10.6-1.5,21.31-2.54,31.9-3.77,30.23-3.52,60.4-7.5,90.6-11.3,17.36-2.18,25.15-10.64,25.18-28.46Q898.68,622.32,898.61,578.76Zm.15-448.17c0-7.14,0-12.83,0-18.51-.1-12.9-6.68-21.85-19.2-22.84-30.4-2.41-60,.36-85,20.39-10.15,8.15-20.68,16.59-22.67,31-1.88,13.6-4.3,27.14-5.63,40.79-3.52,36.26-8.38,72.38-11.4,108.71-1.14,13.62-1.83,27.43-4,40.89-2.92,18-4.52,36.05-5.74,54.07-1.09,16.06-5.52,31.79-4.44,48,.11,1.67-.93,3.42-1.45,5.13-3.29,10.8,2.16,17.7,13.63,18.52,7.43.53,13.94-3,21.11-3.33,17.24-.78,34.44-1,51.73-2.83,19.17-2,38.62-3.09,58-4.39,7.62-.51,11.75-3.66,11.76-11.49,0-18.56,0-37.11.13-55.66.05-5.71-2.46-7.79-8.09-8.08a87,87,0,0,1-40.63-12.63c-29.67-18-47.63-44-52.61-79-7.78-54.78,28.6-105.55,79.25-118.26,8-2,18.6-.51,23.52-6.6C902.18,148,897.93,137.71,898.76,130.59ZM508.66,440.84c-44.91-.42-75.15,3.32-105.33,7.43-26.08,3.55-51,11.69-75.84,20.16-3.74,1.28-5.69,4-6.25,8a19.75,19.75,0,0,1-12.57,16.22c-7.43,3.13-8,7.69-4.14,14.12,8.58,14.34,16.63,29,25.49,43.16,6.25,10,11.05,10.53,22,5.6a342.61,342.61,0,0,1,58.94-20.24c18.32-4.54,36.93-5.88,55.46-8.36,36-4.83,71.55.47,106.73,6.59,23.64,4.12,46.53,12.28,68.33,22.93,9.17,4.47,14.91,2.07,20.11-6.89,8.23-14.2,15.53-29.08,25.05-42.37,6.06-8.47,2.69-11.4-4.12-14.58-7.8-3.66-13.1-9.27-15-17.81-.88-3.88-3.37-5.58-7.05-7.17-14.85-6.43-30.48-10.21-46.09-13.81C574.87,444.68,534.7,441.57,508.66,440.84ZM96.52,579.2c0,30.51-.12,61,.11,91.53.05,5.76,1.33,10.49,7,15.16,10.83,8.94,23.77,7.45,35.48,9.29,33,5.19,66.33,7.67,99.46,11.86,7.92,1,9.64-1.81,10.74-8.74,2-12.89-.15-25.61-.15-38.4,0-39.19-.25-78.37,0-117.55,0-8-1.53-12.45-10.76-12-7.52.39-13.15-4.49-13.9-11.48-1.08-10.17-3.25-21,3.77-30.33,3.05-4.08,1.38-6.12-3.09-6.32-12.49-.57-24.51-4.4-37.25-3.91-17,.65-34.08,1-51-1.67a130,130,0,0,0-25-1.78c-12.46.44-15.34,3.2-15.36,15.48C96.47,520,96.52,549.59,96.52,579.2Zm.1-172.9h.08c0,8.38-.2,16.76.07,25.13.19,5.89,2.52,10.46,9.28,11.17,26.94,2.81,53.63,9.11,80.92,7,17.48-1.33,34.24,4.55,51.62,3.82,6.83-.29,9.31-2.35,9.14-9.62-.35-14.36-.18-28.76-2.45-42.94-2.93-18.36-2.19-37-4.72-55.31-2.58-18.57-7-36.86-6-55.81a39.11,39.11,0,0,0-.74-11.6c-4.1-15.92-6.95-31.94-6.34-48.49a48.63,48.63,0,0,0-1-12.46c-3.26-14.21-4.35-28.75-5.74-43.15-1-10.69-4.2-20.91-5.12-31.62a28.39,28.39,0,0,0-6.25-15.53,97.66,97.66,0,0,0-38.23-28.55c-19.23-7.95-39.31-8.94-59.63-6.3-9.18,1.19-16.08,8.35-16.46,17.41-.54,12.85-.23,25.73-.11,38.6,0,4.6,1.77,8,7.08,8.74,11.51,1.51,22.62,3.84,33.53,8.57,17.74,7.7,32.53,19.29,43,34.7,16.89,24.84,26.33,51.71,19.27,83.31-4.55,20.37-11.36,38.52-25.13,54.12-18.54,21-42.15,32.37-69.37,36.82-4.89.8-6.71,3.16-6.7,7.71Q96.64,394.18,96.62,406.3ZM341.54,722.62c12.94.39,15.13-1.38,12.94-13.27-3.45-18.67-6.93-37.41-11.9-55.71-6.78-25-14.44-49.78-25.15-73.57-9.38-20.8-20.95-40.19-33.55-59.08-2.45-3.66-5.75-5.65-9.89-4.07-4.46,1.7-3.37,5.84-2.63,9.31,1.4,6.52,1,13.1,1.05,19.67.24,51.39,0,102.78,3.58,154.1.58,8.3,4.57,13.25,11.94,14.56C305.72,717.7,323.66,720,341.54,722.62ZM719.39,553c0-9.27.07-18.55,0-27.82,0-3.18.64-7-3.55-8.28-3.74-1.14-6.4,1.1-8.34,3.88-5.13,7.35-10.56,14.55-15,22.31-29.4,51.7-47.44,107.25-55.6,166.09-1.79,12.91-.95,14.64,12.24,13.28,17.69-1.83,35.31-4.66,52.81-7.9,9.65-1.79,13.75-7.59,13.72-18.17C715.51,648.5,715.89,600.69,719.39,553ZM410.69,150c.25-15.55-7.16-21.48-21.72-17.44-1.73.47-3.52.68-5.27,1.05-28.67,6.06-56.53,14.56-83,27.36-4.58,2.22-6.38,5.52-6.89,10.52-.93,9.1,1.15,18.48-2.73,27.36-.86,2-1,5,1.22,6.67,2.41,1.82,4.5-.3,6.51-1.41,29.29-16.07,60.7-25.7,93.54-31.13C403.5,171.14,410.5,162.17,410.69,150Zm288.62,32.14c2.55-10.5-1.87-18.4-14.33-23.65-28.72-12.1-58.38-20.69-88.71-27.32a12.37,12.37,0,0,0-7.77,1.06c-9.08,3.82-9.37,11.47-8.91,19.53s8.41,18.62,16.18,20.72c6.31,1.71,12.76,3.4,19.23,3.89,24,1.84,46.69,8.23,68.51,18.12C699.4,201.69,699.41,201.65,699.31,182.14ZM760.6,509.27a28.25,28.25,0,0,0-1.73-9.64c-8.48-25.23-26.6-43.62-44.36-62.13-6-6.26-15.93-5-21.34,2a249.37,249.37,0,0,0-14.8,21.38c-4.75,7.64-3,19.7,4.26,24.25,19.66,12.4,39.47,24.62,59.73,36C752.63,526.94,760.71,521.09,760.6,509.27Zm-530.15-1.13c1,4.44-.78,11,5.35,14.37s10.73-.87,15.62-3.65c8.31-4.72,16.89-9,25-14,10.88-6.75,21.8-13.56,32-21.29,6.35-4.81,10.92-11.48,5-20.05C308,455.65,303,447.45,297.08,440c-6.45-8.11-15.79-8.68-22.63-1.64-14.6,15-27.18,31.69-38.57,49.21C232.14,493.32,230.5,500.19,230.45,508.14Zm264.41-85.27v-.66c-3.87,0-7.75,0-11.63,0A418.28,418.28,0,0,0,370.36,437.3c-15.81,4.32-31.89,7.81-47.1,14.07-2.94,1.21-7.78,2.3-5.1,7.46,1.88,3.62,4.65,4.09,9,2.92,10.35-2.8,20.22-6.95,30.47-10.05,28.93-8.74,58.61-13.55,88.47-15.8,32.12-2.41,64.46-2.1,96.68-.27A304.26,304.26,0,0,1,581,439.8c28,5.23,55.8,11.84,82.62,21.73,4.32,1.59,6.15,1.36,8.22-2.95,2.59-5.4-1.2-6.54-4.42-7.58-9.93-3.22-20-6-30-9-36.29-10.86-73.17-18.33-111.18-19.09C515.8,422.7,505.33,422.87,494.86,422.87Z"
            },
            {
                id: 2,
                name: "Крыша",
                expectedStatus: "error",
                damaged: false,
                path: "M717.77,1130.81c0,25.12-.34,50.26.13,75.38.29,16.16-6.21,28.43-19.11,37.34-23.43,16.17-48.86,28.63-74.93,39.93a358.39,358.39,0,0,1-53.29,18.17c-14.87,3.81-29.93,7.35-45.35,8.84-9.42.91-18.51,3.81-28.23,3.46-22.66-.82-44.69-5.2-66.75-9.93a355.76,355.76,0,0,1-89-31.71c-20-10.34-41.51-18.74-57.65-35.39-7.72-8-11.48-17.89-11.46-29.21q.12-77.62,0-155.26c0-5.79-.4-12.06,6.11-14.59,6.07-2.35,12-1.43,17.77,2.54,30.25,20.74,63.36,35.21,98.62,45.27,33.27,9.48,67.22,14.55,101.6,14,53.23-.86,104.83-10.26,153.14-34.39,15.27-7.62,30.4-15.27,44.5-24.86a18.72,18.72,0,0,1,10.76-3.71c10.22-.08,12.94,2.17,13,12.46.15,27.22,0,54.44,0,81.67Zm-435.89,90.34c.8,1.88,1.27,3.27,1.95,4.54,6.63,12.33,18.94,18,30.11,24.62a454,454,0,0,0,81.3,37.18c28.75,10,58.24,16.67,88.6,18.73,34.37,2.34,67.47-5.44,100-15.25,35.28-10.66,68.35-26.71,100.06-45.44,7.64-4.52,15.55-9,20.09-17.27,1.11-2,3.92-4.09,2.34-6.27-2-2.81-4.72-.39-7.17.55q-45.57,17.4-91.2,34.62c-9.77,3.68-20.17,1.53-23.21-5.27a43.55,43.55,0,0,1-1-34,21.58,21.58,0,0,1,13.73-13.07c34.32-12,68.46-24.59,102.56-37.24,4.65-1.73,11.33-2.32,11.38-9.56.28-35.9.57-71.8.42-107.69,0-8.27-4.52-10.31-11.87-5.9-8.94,5.37-17.18,12-26.35,16.87A375.41,375.41,0,0,1,589.78,1094c-29.31,7.54-58.89,12.2-89,13-30.58.85-60.62-3.64-90.34-10.43-29.41-6.74-57.77-16.43-84.47-30.72-12.65-6.77-25.12-13.77-36.93-21.93-3.18-2.2-7.69-5-8.81,1.51-1.16,6.71-3.15,13.71-2.86,20.2,1.18,25.7.05,51.38.5,77.06.29,16.39.79,17.64,15.9,23.51q48,18.64,96.07,36.93c14.81,5.67,17.56,9.59,17.64,26,0,3.59,0,7.19,0,10.78-.13,16.63-7.94,22.82-23.58,17.27-28.1-10-55.89-20.86-83.9-31.14C294.35,1224.08,289.21,1219.81,281.88,1221.15Zm120.72,14.64c-3.34-7.81,0-20.55-12.91-25.53-34.18-13.16-68.43-26.15-102.52-39.55-6.21-2.44-7.58-.09-7.61,5.21-.05,9.56.06,19.13-.05,28.69-.05,4.85,1.76,7.35,6.78,8.82,7.94,2.33,15.52,5.91,23.3,8.83,25.37,9.52,50.66,19.27,76.19,28.35C397,1254.61,402.2,1250.07,402.6,1235.79Zm309.45-44c0-3.59.09-7.18,0-10.76-.25-9.08-1.4-9.79-10.11-6.65-28.86,10.4-57.64,21-86.6,31.1-26,9-26,8.78-25.2,36,0,.59,0,1.19,0,1.79.63,8,4.14,10.82,11.68,8.07,30.8-11.19,61.49-22.68,92.17-34.18C712.09,1210.36,712.05,1210.26,712.05,1191.77Z"
            }
        ]
    },
    reducers: {
        removeSelection: (state, action) => {
            return {
                ...state, 
                data: state.data.map(part => part.id === action.payload.id ? 
                        {...part, damaged: false} : 
                        part
                    )
            }
        }
    },
    extraReducers: bulder => {
        bulder.addCase(addPart.pending, state => {
            state.status = 'pending'
        })
        .addCase(addPart.fulfilled, (state, action) => {
            state.status = null
            state.data.map(part => {
                if (part.id === action.payload.id) part.damaged = true;
                return part;
            })
        })
    } 
})


export default partsSlice.reducer;
export const {removeSelection} = partsSlice.actions