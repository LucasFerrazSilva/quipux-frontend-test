import { Song } from "./Song";

export interface Playlist {
    nome: string;
    descricao: string;
    musicas: Song[];
}