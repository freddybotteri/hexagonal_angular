import { Observable } from 'rxjs';
import { Budget } from '../Budget';

export abstract class BudgetGateway {
    abstract getByID(id: String): Observable<Budget>;
    abstract getAll(): Observable<Array<Budget>>;
    abstract saveNew (_budget :Budget) : Observable<void>;
} 