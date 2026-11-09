import { readFileSync, writeFileSync } from 'fs';
import path from "node:path";
import type { Database, WorkoutRecord } from "../types/record-interface";
import { toHttpError } from '../utils/http_error';

const DB_PATH: string = path.resolve(import.meta.dirname, "../../data/db.json");

export const loadDB = (): Database => {
    try {
        return JSON.parse(readFileSync(DB_PATH, "utf-8")) as Database;
    } catch (error) {
        throw toHttpError(error);
    }
};

export const saveToDatabase = (db: Database): void => {
    try {
        writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
    } catch (error) {
        throw toHttpError(error);
    }
};

export const loadRecord = (id: string): WorkoutRecord | undefined => {
    try {
        let datos: Database = loadDB();
        return datos.records.find((record: WorkoutRecord) => record.id === id);
    } catch (error) {
        throw toHttpError(error);
    }
};

export const createRecord = (record: WorkoutRecord): boolean => {
    try {
        let dataBase: Database = loadDB();
        dataBase.records.push(record);
        saveToDatabase(dataBase);
        return true;
    } catch (error) {
        throw toHttpError(error);
    }
};

export const updateRecord = (id: string, record: WorkoutRecord): boolean => {
    try {
        let dataBase: Database = loadDB();
        let updated = false;
        dataBase.records.forEach((reco: WorkoutRecord) => {
            if (reco.id === id) {
                if (record.member !== undefined) reco.member = record.member;
                if (record.record !== undefined) reco.record = record.record;
                if (record.memberId !== undefined) reco.memberId = record.memberId;
                if (record.workout !== undefined) reco.workout = record.workout;
                updated = true;
            }
        });
        if (!updated) {
            return false;
        }
        saveToDatabase(dataBase);
        return true;
    } catch (error) {
        throw toHttpError(error);
    }
};

export const deleteRecord = (id: string): boolean => {
    try {
        let dataBase: Database = loadDB();
        const initialLength = dataBase.records.length;
        const recordActualizados = dataBase.records.filter((record: WorkoutRecord) => record.id !== id);
        if (recordActualizados.length === initialLength) {
            return false;
        }
        dataBase.records = recordActualizados;
        saveToDatabase(dataBase);
        return true;
    } catch (error) {
        throw toHttpError(error);
    }
};
