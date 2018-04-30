import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()

export class DbApiService {
  currentMovie: any = {};
  private itemsRef: AngularFireList<any>;

  constructor(private fb: AngularFireDatabase,
              private auth: AngularFireAuth) {
  }

  getMovies(): Observable<any> {
    return this.fb.list('/Películas/todas').snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            id: data.payload.val().id,
            name: data.payload.val().name,
            img: data.payload.val().img,
            year: data.payload.val().year,

            categoria : data.payload.val().categoria
          }));
      });
  }

  getMovieDetails(categoria, key): Observable<any> {
    return this.fb.list(`Películas/Categorías/${categoria}/${key}`).snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            duracion: data.payload.val().duracion,
            name: data.payload.val().name,
            img: data.payload.val().img,
            year: data.payload.val().year,
            tag: data.payload.val().tag,
            sinopsis: data.payload.val().sinopsis,
            actores: data.payload.val().actores,
            director: data.payload.val().director
          }));
      });
  }

  getTVPrograms(): Observable<any> {
    return this.fb.list('Programación TV/Canales').snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            img: data.payload.val().img,
            info: data.payload.val().info,
            name: data.payload.val().name
          }));
      });
  }

  getTVProgramsDetails(key): Observable<any> {
    return this.fb.list(`Programación TV/Canales/${key}/Hoy`).snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            horario: data.payload.val().horario,
            informacion: data.payload.val().informacion,
            name: data.payload.val().name
          })
        )
      })
  }


  getTVProgramsDetailsWithDay(key, horario): Observable<any> {
    return this.fb.list(`Programación TV/Canales/${key}/${horario}`).snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            horario: data.payload.val().horario,
            informacion: data.payload.val().informacion,
            name: data.payload.val().name
          })
        );
      });
  }

  getSeries(): Observable<any>{
    return this.fb.list('Series').snapshotChanges()
      .map(changes => {
        return changes.map(
          data => ({
            key: data.payload.key,
            img: data.payload.val().img,
            actores: data.payload.val().actores,
            duracion: data.payload.val().duracion,
            name: data.payload.val().name,
            sinopsis: data.payload.val().sinopsis,
            tag: data.payload.val().tag,
            year: data.payload.val().year,
            seasons: data.payload.val().seasons,
            director: data.payload.val().director
          })
        );
      });

  }

}
