
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model schoolership
 * 
 */
export type schoolership = $Result.DefaultSelection<Prisma.$schoolershipPayload>
/**
 * Model course 
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model applyment
 * 
 */
export type applyment = $Result.DefaultSelection<Prisma.$applymentPayload>
/**
 * Model applymentCourse
 * 
 */
export type applymentCourse = $Result.DefaultSelection<Prisma.$applymentCoursePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolership`: Exposes CRUD operations for the **schoolership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schoolerships
    * const schoolerships = await prisma.schoolership.findMany()
    * ```
    */
  get schoolership(): Prisma.schoolershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applyment`: Exposes CRUD operations for the **applyment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applyments
    * const applyments = await prisma.applyment.findMany()
    * ```
    */
  get applyment(): Prisma.applymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applymentCourse`: Exposes CRUD operations for the **applymentCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplymentCourses
    * const applymentCourses = await prisma.applymentCourse.findMany()
    * ```
    */
  get applymentCourse(): Prisma.applymentCourseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    schoolership: 'schoolership',
    course: 'course',
    applyment: 'applyment',
    applymentCourse: 'applymentCourse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "schoolership" | "course" | "applyment" | "applymentCourse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      schoolership: {
        payload: Prisma.$schoolershipPayload<ExtArgs>
        fields: Prisma.schoolershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schoolershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schoolershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          findFirst: {
            args: Prisma.schoolershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schoolershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          findMany: {
            args: Prisma.schoolershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>[]
          }
          create: {
            args: Prisma.schoolershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          createMany: {
            args: Prisma.schoolershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.schoolershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          update: {
            args: Prisma.schoolershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          deleteMany: {
            args: Prisma.schoolershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schoolershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.schoolershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolershipPayload>
          }
          aggregate: {
            args: Prisma.SchoolershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolership>
          }
          groupBy: {
            args: Prisma.schoolershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.schoolershipCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolershipCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      applyment: {
        payload: Prisma.$applymentPayload<ExtArgs>
        fields: Prisma.applymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          findFirst: {
            args: Prisma.applymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          findMany: {
            args: Prisma.applymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>[]
          }
          create: {
            args: Prisma.applymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          createMany: {
            args: Prisma.applymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.applymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          update: {
            args: Prisma.applymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          deleteMany: {
            args: Prisma.applymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.applymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentPayload>
          }
          aggregate: {
            args: Prisma.ApplymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplyment>
          }
          groupBy: {
            args: Prisma.applymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.applymentCountArgs<ExtArgs>
            result: $Utils.Optional<ApplymentCountAggregateOutputType> | number
          }
        }
      }
      applymentCourse: {
        payload: Prisma.$applymentCoursePayload<ExtArgs>
        fields: Prisma.applymentCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applymentCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applymentCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          findFirst: {
            args: Prisma.applymentCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applymentCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          findMany: {
            args: Prisma.applymentCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>[]
          }
          create: {
            args: Prisma.applymentCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          createMany: {
            args: Prisma.applymentCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.applymentCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          update: {
            args: Prisma.applymentCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          deleteMany: {
            args: Prisma.applymentCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applymentCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.applymentCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applymentCoursePayload>
          }
          aggregate: {
            args: Prisma.ApplymentCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplymentCourse>
          }
          groupBy: {
            args: Prisma.applymentCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplymentCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.applymentCourseCountArgs<ExtArgs>
            result: $Utils.Optional<ApplymentCourseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    schoolership?: schoolershipOmit
    course?: courseOmit
    applyment?: applymentOmit
    applymentCourse?: applymentCourseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applyemnt: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applyemnt?: boolean | UserCountOutputTypeCountApplyemntArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplyemntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applymentWhereInput
  }


  /**
   * Count Type SchoolershipCountOutputType
   */

  export type SchoolershipCountOutputType = {
    course: number
  }

  export type SchoolershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | SchoolershipCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * SchoolershipCountOutputType without action
   */
  export type SchoolershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolershipCountOutputType
     */
    select?: SchoolershipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolershipCountOutputType without action
   */
  export type SchoolershipCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    ApplymentCourse: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApplymentCourse?: boolean | CourseCountOutputTypeCountApplymentCourseArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountApplymentCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applymentCourseWhereInput
  }


  /**
   * Count Type ApplymentCountOutputType
   */

  export type ApplymentCountOutputType = {
    ApplymentCourse: number
  }

  export type ApplymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ApplymentCourse?: boolean | ApplymentCountOutputTypeCountApplymentCourseArgs
  }

  // Custom InputTypes
  /**
   * ApplymentCountOutputType without action
   */
  export type ApplymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplymentCountOutputType
     */
    select?: ApplymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplymentCountOutputType without action
   */
  export type ApplymentCountOutputTypeCountApplymentCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applymentCourseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    bi_number: string | null
    date_birth: string | null
    address: string | null
    password: string | null
    status: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    bi_number: string | null
    date_birth: string | null
    address: string | null
    password: string | null
    status: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    bi_number: number
    date_birth: number
    address: number
    password: number
    status: number
    permitions: number
    roles: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    bi_number?: true
    date_birth?: true
    address?: true
    password?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    bi_number?: true
    date_birth?: true
    address?: true
    password?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    bi_number?: true
    date_birth?: true
    address?: true
    password?: true
    status?: true
    permitions?: true
    roles?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonValue
    roles: JsonValue
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    bi_number?: boolean
    date_birth?: boolean
    address?: boolean
    password?: boolean
    status?: boolean
    permitions?: boolean
    roles?: boolean
    applyemnt?: boolean | user$applyemntArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    bi_number?: boolean
    date_birth?: boolean
    address?: boolean
    password?: boolean
    status?: boolean
    permitions?: boolean
    roles?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "bi_number" | "date_birth" | "address" | "password" | "status" | "permitions" | "roles", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applyemnt?: boolean | user$applyemntArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      applyemnt: Prisma.$applymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      bi_number: string
      date_birth: string
      address: string
      password: string
      status: string
      permitions: Prisma.JsonValue
      roles: Prisma.JsonValue
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applyemnt<T extends user$applyemntArgs<ExtArgs> = {}>(args?: Subset<T, user$applyemntArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly bi_number: FieldRef<"user", 'String'>
    readonly date_birth: FieldRef<"user", 'String'>
    readonly address: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly status: FieldRef<"user", 'String'>
    readonly permitions: FieldRef<"user", 'Json'>
    readonly roles: FieldRef<"user", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.applyemnt
   */
  export type user$applyemntArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    where?: applymentWhereInput
    orderBy?: applymentOrderByWithRelationInput | applymentOrderByWithRelationInput[]
    cursor?: applymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplymentScalarFieldEnum | ApplymentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model schoolership
   */

  export type AggregateSchoolership = {
    _count: SchoolershipCountAggregateOutputType | null
    _min: SchoolershipMinAggregateOutputType | null
    _max: SchoolershipMaxAggregateOutputType | null
  }

  export type SchoolershipMinAggregateOutputType = {
    id: string | null
    name: string | null
    coutry: string | null
    start_at: Date | null
    end_at: Date | null
    status: string | null
  }

  export type SchoolershipMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coutry: string | null
    start_at: Date | null
    end_at: Date | null
    status: string | null
  }

  export type SchoolershipCountAggregateOutputType = {
    id: number
    name: number
    coutry: number
    start_at: number
    end_at: number
    status: number
    _all: number
  }


  export type SchoolershipMinAggregateInputType = {
    id?: true
    name?: true
    coutry?: true
    start_at?: true
    end_at?: true
    status?: true
  }

  export type SchoolershipMaxAggregateInputType = {
    id?: true
    name?: true
    coutry?: true
    start_at?: true
    end_at?: true
    status?: true
  }

  export type SchoolershipCountAggregateInputType = {
    id?: true
    name?: true
    coutry?: true
    start_at?: true
    end_at?: true
    status?: true
    _all?: true
  }

  export type SchoolershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schoolership to aggregate.
     */
    where?: schoolershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schoolerships to fetch.
     */
    orderBy?: schoolershipOrderByWithRelationInput | schoolershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schoolershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schoolerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schoolerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schoolerships
    **/
    _count?: true | SchoolershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolershipMaxAggregateInputType
  }

  export type GetSchoolershipAggregateType<T extends SchoolershipAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolership[P]>
      : GetScalarType<T[P], AggregateSchoolership[P]>
  }




  export type schoolershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolershipWhereInput
    orderBy?: schoolershipOrderByWithAggregationInput | schoolershipOrderByWithAggregationInput[]
    by: SchoolershipScalarFieldEnum[] | SchoolershipScalarFieldEnum
    having?: schoolershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolershipCountAggregateInputType | true
    _min?: SchoolershipMinAggregateInputType
    _max?: SchoolershipMaxAggregateInputType
  }

  export type SchoolershipGroupByOutputType = {
    id: string
    name: string
    coutry: string
    start_at: Date
    end_at: Date
    status: string
    _count: SchoolershipCountAggregateOutputType | null
    _min: SchoolershipMinAggregateOutputType | null
    _max: SchoolershipMaxAggregateOutputType | null
  }

  type GetSchoolershipGroupByPayload<T extends schoolershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolershipGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolershipGroupByOutputType[P]>
        }
      >
    >


  export type schoolershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coutry?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
    course?: boolean | schoolership$courseArgs<ExtArgs>
    _count?: boolean | SchoolershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolership"]>



  export type schoolershipSelectScalar = {
    id?: boolean
    name?: boolean
    coutry?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
  }

  export type schoolershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coutry" | "start_at" | "end_at" | "status", ExtArgs["result"]["schoolership"]>
  export type schoolershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | schoolership$courseArgs<ExtArgs>
    _count?: boolean | SchoolershipCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $schoolershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schoolership"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      coutry: string
      start_at: Date
      end_at: Date
      status: string
    }, ExtArgs["result"]["schoolership"]>
    composites: {}
  }

  type schoolershipGetPayload<S extends boolean | null | undefined | schoolershipDefaultArgs> = $Result.GetResult<Prisma.$schoolershipPayload, S>

  type schoolershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schoolershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolershipCountAggregateInputType | true
    }

  export interface schoolershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schoolership'], meta: { name: 'schoolership' } }
    /**
     * Find zero or one Schoolership that matches the filter.
     * @param {schoolershipFindUniqueArgs} args - Arguments to find a Schoolership
     * @example
     * // Get one Schoolership
     * const schoolership = await prisma.schoolership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schoolershipFindUniqueArgs>(args: SelectSubset<T, schoolershipFindUniqueArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schoolership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schoolershipFindUniqueOrThrowArgs} args - Arguments to find a Schoolership
     * @example
     * // Get one Schoolership
     * const schoolership = await prisma.schoolership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schoolershipFindUniqueOrThrowArgs>(args: SelectSubset<T, schoolershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schoolership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipFindFirstArgs} args - Arguments to find a Schoolership
     * @example
     * // Get one Schoolership
     * const schoolership = await prisma.schoolership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schoolershipFindFirstArgs>(args?: SelectSubset<T, schoolershipFindFirstArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schoolership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipFindFirstOrThrowArgs} args - Arguments to find a Schoolership
     * @example
     * // Get one Schoolership
     * const schoolership = await prisma.schoolership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schoolershipFindFirstOrThrowArgs>(args?: SelectSubset<T, schoolershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schoolerships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schoolerships
     * const schoolerships = await prisma.schoolership.findMany()
     * 
     * // Get first 10 Schoolerships
     * const schoolerships = await prisma.schoolership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolershipWithIdOnly = await prisma.schoolership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schoolershipFindManyArgs>(args?: SelectSubset<T, schoolershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schoolership.
     * @param {schoolershipCreateArgs} args - Arguments to create a Schoolership.
     * @example
     * // Create one Schoolership
     * const Schoolership = await prisma.schoolership.create({
     *   data: {
     *     // ... data to create a Schoolership
     *   }
     * })
     * 
     */
    create<T extends schoolershipCreateArgs>(args: SelectSubset<T, schoolershipCreateArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schoolerships.
     * @param {schoolershipCreateManyArgs} args - Arguments to create many Schoolerships.
     * @example
     * // Create many Schoolerships
     * const schoolership = await prisma.schoolership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schoolershipCreateManyArgs>(args?: SelectSubset<T, schoolershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schoolership.
     * @param {schoolershipDeleteArgs} args - Arguments to delete one Schoolership.
     * @example
     * // Delete one Schoolership
     * const Schoolership = await prisma.schoolership.delete({
     *   where: {
     *     // ... filter to delete one Schoolership
     *   }
     * })
     * 
     */
    delete<T extends schoolershipDeleteArgs>(args: SelectSubset<T, schoolershipDeleteArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schoolership.
     * @param {schoolershipUpdateArgs} args - Arguments to update one Schoolership.
     * @example
     * // Update one Schoolership
     * const schoolership = await prisma.schoolership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schoolershipUpdateArgs>(args: SelectSubset<T, schoolershipUpdateArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schoolerships.
     * @param {schoolershipDeleteManyArgs} args - Arguments to filter Schoolerships to delete.
     * @example
     * // Delete a few Schoolerships
     * const { count } = await prisma.schoolership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schoolershipDeleteManyArgs>(args?: SelectSubset<T, schoolershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schoolerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schoolerships
     * const schoolership = await prisma.schoolership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schoolershipUpdateManyArgs>(args: SelectSubset<T, schoolershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schoolership.
     * @param {schoolershipUpsertArgs} args - Arguments to update or create a Schoolership.
     * @example
     * // Update or create a Schoolership
     * const schoolership = await prisma.schoolership.upsert({
     *   create: {
     *     // ... data to create a Schoolership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schoolership we want to update
     *   }
     * })
     */
    upsert<T extends schoolershipUpsertArgs>(args: SelectSubset<T, schoolershipUpsertArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schoolerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipCountArgs} args - Arguments to filter Schoolerships to count.
     * @example
     * // Count the number of Schoolerships
     * const count = await prisma.schoolership.count({
     *   where: {
     *     // ... the filter for the Schoolerships we want to count
     *   }
     * })
    **/
    count<T extends schoolershipCountArgs>(
      args?: Subset<T, schoolershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schoolership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolershipAggregateArgs>(args: Subset<T, SchoolershipAggregateArgs>): Prisma.PrismaPromise<GetSchoolershipAggregateType<T>>

    /**
     * Group by Schoolership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends schoolershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolershipGroupByArgs['orderBy'] }
        : { orderBy?: schoolershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, schoolershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schoolership model
   */
  readonly fields: schoolershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schoolership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends schoolership$courseArgs<ExtArgs> = {}>(args?: Subset<T, schoolership$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schoolership model
   */
  interface schoolershipFieldRefs {
    readonly id: FieldRef<"schoolership", 'String'>
    readonly name: FieldRef<"schoolership", 'String'>
    readonly coutry: FieldRef<"schoolership", 'String'>
    readonly start_at: FieldRef<"schoolership", 'DateTime'>
    readonly end_at: FieldRef<"schoolership", 'DateTime'>
    readonly status: FieldRef<"schoolership", 'String'>
  }
    

  // Custom InputTypes
  /**
   * schoolership findUnique
   */
  export type schoolershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter, which schoolership to fetch.
     */
    where: schoolershipWhereUniqueInput
  }

  /**
   * schoolership findUniqueOrThrow
   */
  export type schoolershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter, which schoolership to fetch.
     */
    where: schoolershipWhereUniqueInput
  }

  /**
   * schoolership findFirst
   */
  export type schoolershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter, which schoolership to fetch.
     */
    where?: schoolershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schoolerships to fetch.
     */
    orderBy?: schoolershipOrderByWithRelationInput | schoolershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schoolerships.
     */
    cursor?: schoolershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schoolerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schoolerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schoolerships.
     */
    distinct?: SchoolershipScalarFieldEnum | SchoolershipScalarFieldEnum[]
  }

  /**
   * schoolership findFirstOrThrow
   */
  export type schoolershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter, which schoolership to fetch.
     */
    where?: schoolershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schoolerships to fetch.
     */
    orderBy?: schoolershipOrderByWithRelationInput | schoolershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schoolerships.
     */
    cursor?: schoolershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schoolerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schoolerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schoolerships.
     */
    distinct?: SchoolershipScalarFieldEnum | SchoolershipScalarFieldEnum[]
  }

  /**
   * schoolership findMany
   */
  export type schoolershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter, which schoolerships to fetch.
     */
    where?: schoolershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schoolerships to fetch.
     */
    orderBy?: schoolershipOrderByWithRelationInput | schoolershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schoolerships.
     */
    cursor?: schoolershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schoolerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schoolerships.
     */
    skip?: number
    distinct?: SchoolershipScalarFieldEnum | SchoolershipScalarFieldEnum[]
  }

  /**
   * schoolership create
   */
  export type schoolershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * The data needed to create a schoolership.
     */
    data: XOR<schoolershipCreateInput, schoolershipUncheckedCreateInput>
  }

  /**
   * schoolership createMany
   */
  export type schoolershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schoolerships.
     */
    data: schoolershipCreateManyInput | schoolershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schoolership update
   */
  export type schoolershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * The data needed to update a schoolership.
     */
    data: XOR<schoolershipUpdateInput, schoolershipUncheckedUpdateInput>
    /**
     * Choose, which schoolership to update.
     */
    where: schoolershipWhereUniqueInput
  }

  /**
   * schoolership updateMany
   */
  export type schoolershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schoolerships.
     */
    data: XOR<schoolershipUpdateManyMutationInput, schoolershipUncheckedUpdateManyInput>
    /**
     * Filter which schoolerships to update
     */
    where?: schoolershipWhereInput
    /**
     * Limit how many schoolerships to update.
     */
    limit?: number
  }

  /**
   * schoolership upsert
   */
  export type schoolershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * The filter to search for the schoolership to update in case it exists.
     */
    where: schoolershipWhereUniqueInput
    /**
     * In case the schoolership found by the `where` argument doesn't exist, create a new schoolership with this data.
     */
    create: XOR<schoolershipCreateInput, schoolershipUncheckedCreateInput>
    /**
     * In case the schoolership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolershipUpdateInput, schoolershipUncheckedUpdateInput>
  }

  /**
   * schoolership delete
   */
  export type schoolershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
    /**
     * Filter which schoolership to delete.
     */
    where: schoolershipWhereUniqueInput
  }

  /**
   * schoolership deleteMany
   */
  export type schoolershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schoolerships to delete
     */
    where?: schoolershipWhereInput
    /**
     * Limit how many schoolerships to delete.
     */
    limit?: number
  }

  /**
   * schoolership.course
   */
  export type schoolership$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * schoolership without action
   */
  export type schoolershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schoolership
     */
    select?: schoolershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schoolership
     */
    omit?: schoolershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolershipInclude<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    vacancies: string | null
    schoolership_id: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    vacancies: string | null
    schoolership_id: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    vacancies: number
    schoolership_id: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    vacancies?: true
    schoolership_id?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    vacancies?: true
    schoolership_id?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    vacancies?: true
    schoolership_id?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    vacancies: string
    schoolership_id: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vacancies?: boolean
    schoolership_id?: boolean
    schoolership?: boolean | schoolershipDefaultArgs<ExtArgs>
    ApplymentCourse?: boolean | course$ApplymentCourseArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type courseSelectScalar = {
    id?: boolean
    name?: boolean
    vacancies?: boolean
    schoolership_id?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "vacancies" | "schoolership_id", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolership?: boolean | schoolershipDefaultArgs<ExtArgs>
    ApplymentCourse?: boolean | course$ApplymentCourseArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      schoolership: Prisma.$schoolershipPayload<ExtArgs>
      ApplymentCourse: Prisma.$applymentCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      vacancies: string
      schoolership_id: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schoolership<T extends schoolershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schoolershipDefaultArgs<ExtArgs>>): Prisma__schoolershipClient<$Result.GetResult<Prisma.$schoolershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ApplymentCourse<T extends course$ApplymentCourseArgs<ExtArgs> = {}>(args?: Subset<T, course$ApplymentCourseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'String'>
    readonly name: FieldRef<"course", 'String'>
    readonly vacancies: FieldRef<"course", 'String'>
    readonly schoolership_id: FieldRef<"course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.ApplymentCourse
   */
  export type course$ApplymentCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    where?: applymentCourseWhereInput
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    cursor?: applymentCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplymentCourseScalarFieldEnum | ApplymentCourseScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model applyment
   */

  export type AggregateApplyment = {
    _count: ApplymentCountAggregateOutputType | null
    _min: ApplymentMinAggregateOutputType | null
    _max: ApplymentMaxAggregateOutputType | null
  }

  export type ApplymentMinAggregateOutputType = {
    id: string | null
    number: string | null
    user_id: string | null
  }

  export type ApplymentMaxAggregateOutputType = {
    id: string | null
    number: string | null
    user_id: string | null
  }

  export type ApplymentCountAggregateOutputType = {
    id: number
    number: number
    user_id: number
    _all: number
  }


  export type ApplymentMinAggregateInputType = {
    id?: true
    number?: true
    user_id?: true
  }

  export type ApplymentMaxAggregateInputType = {
    id?: true
    number?: true
    user_id?: true
  }

  export type ApplymentCountAggregateInputType = {
    id?: true
    number?: true
    user_id?: true
    _all?: true
  }

  export type ApplymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applyment to aggregate.
     */
    where?: applymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applyments to fetch.
     */
    orderBy?: applymentOrderByWithRelationInput | applymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applyments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applyments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applyments
    **/
    _count?: true | ApplymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplymentMaxAggregateInputType
  }

  export type GetApplymentAggregateType<T extends ApplymentAggregateArgs> = {
        [P in keyof T & keyof AggregateApplyment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplyment[P]>
      : GetScalarType<T[P], AggregateApplyment[P]>
  }




  export type applymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applymentWhereInput
    orderBy?: applymentOrderByWithAggregationInput | applymentOrderByWithAggregationInput[]
    by: ApplymentScalarFieldEnum[] | ApplymentScalarFieldEnum
    having?: applymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplymentCountAggregateInputType | true
    _min?: ApplymentMinAggregateInputType
    _max?: ApplymentMaxAggregateInputType
  }

  export type ApplymentGroupByOutputType = {
    id: string
    number: string
    user_id: string
    _count: ApplymentCountAggregateOutputType | null
    _min: ApplymentMinAggregateOutputType | null
    _max: ApplymentMaxAggregateOutputType | null
  }

  type GetApplymentGroupByPayload<T extends applymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplymentGroupByOutputType[P]>
            : GetScalarType<T[P], ApplymentGroupByOutputType[P]>
        }
      >
    >


  export type applymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    user_id?: boolean
    User?: boolean | userDefaultArgs<ExtArgs>
    ApplymentCourse?: boolean | applyment$ApplymentCourseArgs<ExtArgs>
    _count?: boolean | ApplymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applyment"]>



  export type applymentSelectScalar = {
    id?: boolean
    number?: boolean
    user_id?: boolean
  }

  export type applymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "user_id", ExtArgs["result"]["applyment"]>
  export type applymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userDefaultArgs<ExtArgs>
    ApplymentCourse?: boolean | applyment$ApplymentCourseArgs<ExtArgs>
    _count?: boolean | ApplymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $applymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applyment"
    objects: {
      User: Prisma.$userPayload<ExtArgs>
      ApplymentCourse: Prisma.$applymentCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      user_id: string
    }, ExtArgs["result"]["applyment"]>
    composites: {}
  }

  type applymentGetPayload<S extends boolean | null | undefined | applymentDefaultArgs> = $Result.GetResult<Prisma.$applymentPayload, S>

  type applymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplymentCountAggregateInputType | true
    }

  export interface applymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applyment'], meta: { name: 'applyment' } }
    /**
     * Find zero or one Applyment that matches the filter.
     * @param {applymentFindUniqueArgs} args - Arguments to find a Applyment
     * @example
     * // Get one Applyment
     * const applyment = await prisma.applyment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applymentFindUniqueArgs>(args: SelectSubset<T, applymentFindUniqueArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applyment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applymentFindUniqueOrThrowArgs} args - Arguments to find a Applyment
     * @example
     * // Get one Applyment
     * const applyment = await prisma.applyment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applymentFindUniqueOrThrowArgs>(args: SelectSubset<T, applymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applyment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentFindFirstArgs} args - Arguments to find a Applyment
     * @example
     * // Get one Applyment
     * const applyment = await prisma.applyment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applymentFindFirstArgs>(args?: SelectSubset<T, applymentFindFirstArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applyment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentFindFirstOrThrowArgs} args - Arguments to find a Applyment
     * @example
     * // Get one Applyment
     * const applyment = await prisma.applyment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applymentFindFirstOrThrowArgs>(args?: SelectSubset<T, applymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applyments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applyments
     * const applyments = await prisma.applyment.findMany()
     * 
     * // Get first 10 Applyments
     * const applyments = await prisma.applyment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applymentWithIdOnly = await prisma.applyment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applymentFindManyArgs>(args?: SelectSubset<T, applymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applyment.
     * @param {applymentCreateArgs} args - Arguments to create a Applyment.
     * @example
     * // Create one Applyment
     * const Applyment = await prisma.applyment.create({
     *   data: {
     *     // ... data to create a Applyment
     *   }
     * })
     * 
     */
    create<T extends applymentCreateArgs>(args: SelectSubset<T, applymentCreateArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applyments.
     * @param {applymentCreateManyArgs} args - Arguments to create many Applyments.
     * @example
     * // Create many Applyments
     * const applyment = await prisma.applyment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applymentCreateManyArgs>(args?: SelectSubset<T, applymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applyment.
     * @param {applymentDeleteArgs} args - Arguments to delete one Applyment.
     * @example
     * // Delete one Applyment
     * const Applyment = await prisma.applyment.delete({
     *   where: {
     *     // ... filter to delete one Applyment
     *   }
     * })
     * 
     */
    delete<T extends applymentDeleteArgs>(args: SelectSubset<T, applymentDeleteArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applyment.
     * @param {applymentUpdateArgs} args - Arguments to update one Applyment.
     * @example
     * // Update one Applyment
     * const applyment = await prisma.applyment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applymentUpdateArgs>(args: SelectSubset<T, applymentUpdateArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applyments.
     * @param {applymentDeleteManyArgs} args - Arguments to filter Applyments to delete.
     * @example
     * // Delete a few Applyments
     * const { count } = await prisma.applyment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applymentDeleteManyArgs>(args?: SelectSubset<T, applymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applyments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applyments
     * const applyment = await prisma.applyment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applymentUpdateManyArgs>(args: SelectSubset<T, applymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applyment.
     * @param {applymentUpsertArgs} args - Arguments to update or create a Applyment.
     * @example
     * // Update or create a Applyment
     * const applyment = await prisma.applyment.upsert({
     *   create: {
     *     // ... data to create a Applyment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applyment we want to update
     *   }
     * })
     */
    upsert<T extends applymentUpsertArgs>(args: SelectSubset<T, applymentUpsertArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applyments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCountArgs} args - Arguments to filter Applyments to count.
     * @example
     * // Count the number of Applyments
     * const count = await prisma.applyment.count({
     *   where: {
     *     // ... the filter for the Applyments we want to count
     *   }
     * })
    **/
    count<T extends applymentCountArgs>(
      args?: Subset<T, applymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applyment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplymentAggregateArgs>(args: Subset<T, ApplymentAggregateArgs>): Prisma.PrismaPromise<GetApplymentAggregateType<T>>

    /**
     * Group by Applyment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applymentGroupByArgs['orderBy'] }
        : { orderBy?: applymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applyment model
   */
  readonly fields: applymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applyment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ApplymentCourse<T extends applyment$ApplymentCourseArgs<ExtArgs> = {}>(args?: Subset<T, applyment$ApplymentCourseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the applyment model
   */
  interface applymentFieldRefs {
    readonly id: FieldRef<"applyment", 'String'>
    readonly number: FieldRef<"applyment", 'String'>
    readonly user_id: FieldRef<"applyment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * applyment findUnique
   */
  export type applymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter, which applyment to fetch.
     */
    where: applymentWhereUniqueInput
  }

  /**
   * applyment findUniqueOrThrow
   */
  export type applymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter, which applyment to fetch.
     */
    where: applymentWhereUniqueInput
  }

  /**
   * applyment findFirst
   */
  export type applymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter, which applyment to fetch.
     */
    where?: applymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applyments to fetch.
     */
    orderBy?: applymentOrderByWithRelationInput | applymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applyments.
     */
    cursor?: applymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applyments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applyments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applyments.
     */
    distinct?: ApplymentScalarFieldEnum | ApplymentScalarFieldEnum[]
  }

  /**
   * applyment findFirstOrThrow
   */
  export type applymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter, which applyment to fetch.
     */
    where?: applymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applyments to fetch.
     */
    orderBy?: applymentOrderByWithRelationInput | applymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applyments.
     */
    cursor?: applymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applyments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applyments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applyments.
     */
    distinct?: ApplymentScalarFieldEnum | ApplymentScalarFieldEnum[]
  }

  /**
   * applyment findMany
   */
  export type applymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter, which applyments to fetch.
     */
    where?: applymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applyments to fetch.
     */
    orderBy?: applymentOrderByWithRelationInput | applymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applyments.
     */
    cursor?: applymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applyments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applyments.
     */
    skip?: number
    distinct?: ApplymentScalarFieldEnum | ApplymentScalarFieldEnum[]
  }

  /**
   * applyment create
   */
  export type applymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * The data needed to create a applyment.
     */
    data: XOR<applymentCreateInput, applymentUncheckedCreateInput>
  }

  /**
   * applyment createMany
   */
  export type applymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applyments.
     */
    data: applymentCreateManyInput | applymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applyment update
   */
  export type applymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * The data needed to update a applyment.
     */
    data: XOR<applymentUpdateInput, applymentUncheckedUpdateInput>
    /**
     * Choose, which applyment to update.
     */
    where: applymentWhereUniqueInput
  }

  /**
   * applyment updateMany
   */
  export type applymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applyments.
     */
    data: XOR<applymentUpdateManyMutationInput, applymentUncheckedUpdateManyInput>
    /**
     * Filter which applyments to update
     */
    where?: applymentWhereInput
    /**
     * Limit how many applyments to update.
     */
    limit?: number
  }

  /**
   * applyment upsert
   */
  export type applymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * The filter to search for the applyment to update in case it exists.
     */
    where: applymentWhereUniqueInput
    /**
     * In case the applyment found by the `where` argument doesn't exist, create a new applyment with this data.
     */
    create: XOR<applymentCreateInput, applymentUncheckedCreateInput>
    /**
     * In case the applyment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applymentUpdateInput, applymentUncheckedUpdateInput>
  }

  /**
   * applyment delete
   */
  export type applymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
    /**
     * Filter which applyment to delete.
     */
    where: applymentWhereUniqueInput
  }

  /**
   * applyment deleteMany
   */
  export type applymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applyments to delete
     */
    where?: applymentWhereInput
    /**
     * Limit how many applyments to delete.
     */
    limit?: number
  }

  /**
   * applyment.ApplymentCourse
   */
  export type applyment$ApplymentCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    where?: applymentCourseWhereInput
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    cursor?: applymentCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplymentCourseScalarFieldEnum | ApplymentCourseScalarFieldEnum[]
  }

  /**
   * applyment without action
   */
  export type applymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applyment
     */
    select?: applymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applyment
     */
    omit?: applymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentInclude<ExtArgs> | null
  }


  /**
   * Model applymentCourse
   */

  export type AggregateApplymentCourse = {
    _count: ApplymentCourseCountAggregateOutputType | null
    _min: ApplymentCourseMinAggregateOutputType | null
    _max: ApplymentCourseMaxAggregateOutputType | null
  }

  export type ApplymentCourseMinAggregateOutputType = {
    id: string | null
    course_id: string | null
    applyment_id: string | null
  }

  export type ApplymentCourseMaxAggregateOutputType = {
    id: string | null
    course_id: string | null
    applyment_id: string | null
  }

  export type ApplymentCourseCountAggregateOutputType = {
    id: number
    course_id: number
    applyment_id: number
    _all: number
  }


  export type ApplymentCourseMinAggregateInputType = {
    id?: true
    course_id?: true
    applyment_id?: true
  }

  export type ApplymentCourseMaxAggregateInputType = {
    id?: true
    course_id?: true
    applyment_id?: true
  }

  export type ApplymentCourseCountAggregateInputType = {
    id?: true
    course_id?: true
    applyment_id?: true
    _all?: true
  }

  export type ApplymentCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applymentCourse to aggregate.
     */
    where?: applymentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applymentCourses to fetch.
     */
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applymentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applymentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applymentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applymentCourses
    **/
    _count?: true | ApplymentCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplymentCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplymentCourseMaxAggregateInputType
  }

  export type GetApplymentCourseAggregateType<T extends ApplymentCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateApplymentCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplymentCourse[P]>
      : GetScalarType<T[P], AggregateApplymentCourse[P]>
  }




  export type applymentCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applymentCourseWhereInput
    orderBy?: applymentCourseOrderByWithAggregationInput | applymentCourseOrderByWithAggregationInput[]
    by: ApplymentCourseScalarFieldEnum[] | ApplymentCourseScalarFieldEnum
    having?: applymentCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplymentCourseCountAggregateInputType | true
    _min?: ApplymentCourseMinAggregateInputType
    _max?: ApplymentCourseMaxAggregateInputType
  }

  export type ApplymentCourseGroupByOutputType = {
    id: string
    course_id: string
    applyment_id: string
    _count: ApplymentCourseCountAggregateOutputType | null
    _min: ApplymentCourseMinAggregateOutputType | null
    _max: ApplymentCourseMaxAggregateOutputType | null
  }

  type GetApplymentCourseGroupByPayload<T extends applymentCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplymentCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplymentCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplymentCourseGroupByOutputType[P]>
            : GetScalarType<T[P], ApplymentCourseGroupByOutputType[P]>
        }
      >
    >


  export type applymentCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    applyment_id?: boolean
    Course?: boolean | courseDefaultArgs<ExtArgs>
    applyment?: boolean | applymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applymentCourse"]>



  export type applymentCourseSelectScalar = {
    id?: boolean
    course_id?: boolean
    applyment_id?: boolean
  }

  export type applymentCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "applyment_id", ExtArgs["result"]["applymentCourse"]>
  export type applymentCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Course?: boolean | courseDefaultArgs<ExtArgs>
    applyment?: boolean | applymentDefaultArgs<ExtArgs>
  }

  export type $applymentCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applymentCourse"
    objects: {
      Course: Prisma.$coursePayload<ExtArgs>
      applyment: Prisma.$applymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      course_id: string
      applyment_id: string
    }, ExtArgs["result"]["applymentCourse"]>
    composites: {}
  }

  type applymentCourseGetPayload<S extends boolean | null | undefined | applymentCourseDefaultArgs> = $Result.GetResult<Prisma.$applymentCoursePayload, S>

  type applymentCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applymentCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplymentCourseCountAggregateInputType | true
    }

  export interface applymentCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applymentCourse'], meta: { name: 'applymentCourse' } }
    /**
     * Find zero or one ApplymentCourse that matches the filter.
     * @param {applymentCourseFindUniqueArgs} args - Arguments to find a ApplymentCourse
     * @example
     * // Get one ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applymentCourseFindUniqueArgs>(args: SelectSubset<T, applymentCourseFindUniqueArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplymentCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applymentCourseFindUniqueOrThrowArgs} args - Arguments to find a ApplymentCourse
     * @example
     * // Get one ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applymentCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, applymentCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplymentCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseFindFirstArgs} args - Arguments to find a ApplymentCourse
     * @example
     * // Get one ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applymentCourseFindFirstArgs>(args?: SelectSubset<T, applymentCourseFindFirstArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplymentCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseFindFirstOrThrowArgs} args - Arguments to find a ApplymentCourse
     * @example
     * // Get one ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applymentCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, applymentCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplymentCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplymentCourses
     * const applymentCourses = await prisma.applymentCourse.findMany()
     * 
     * // Get first 10 ApplymentCourses
     * const applymentCourses = await prisma.applymentCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applymentCourseWithIdOnly = await prisma.applymentCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applymentCourseFindManyArgs>(args?: SelectSubset<T, applymentCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplymentCourse.
     * @param {applymentCourseCreateArgs} args - Arguments to create a ApplymentCourse.
     * @example
     * // Create one ApplymentCourse
     * const ApplymentCourse = await prisma.applymentCourse.create({
     *   data: {
     *     // ... data to create a ApplymentCourse
     *   }
     * })
     * 
     */
    create<T extends applymentCourseCreateArgs>(args: SelectSubset<T, applymentCourseCreateArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplymentCourses.
     * @param {applymentCourseCreateManyArgs} args - Arguments to create many ApplymentCourses.
     * @example
     * // Create many ApplymentCourses
     * const applymentCourse = await prisma.applymentCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applymentCourseCreateManyArgs>(args?: SelectSubset<T, applymentCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApplymentCourse.
     * @param {applymentCourseDeleteArgs} args - Arguments to delete one ApplymentCourse.
     * @example
     * // Delete one ApplymentCourse
     * const ApplymentCourse = await prisma.applymentCourse.delete({
     *   where: {
     *     // ... filter to delete one ApplymentCourse
     *   }
     * })
     * 
     */
    delete<T extends applymentCourseDeleteArgs>(args: SelectSubset<T, applymentCourseDeleteArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplymentCourse.
     * @param {applymentCourseUpdateArgs} args - Arguments to update one ApplymentCourse.
     * @example
     * // Update one ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applymentCourseUpdateArgs>(args: SelectSubset<T, applymentCourseUpdateArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplymentCourses.
     * @param {applymentCourseDeleteManyArgs} args - Arguments to filter ApplymentCourses to delete.
     * @example
     * // Delete a few ApplymentCourses
     * const { count } = await prisma.applymentCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applymentCourseDeleteManyArgs>(args?: SelectSubset<T, applymentCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplymentCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplymentCourses
     * const applymentCourse = await prisma.applymentCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applymentCourseUpdateManyArgs>(args: SelectSubset<T, applymentCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplymentCourse.
     * @param {applymentCourseUpsertArgs} args - Arguments to update or create a ApplymentCourse.
     * @example
     * // Update or create a ApplymentCourse
     * const applymentCourse = await prisma.applymentCourse.upsert({
     *   create: {
     *     // ... data to create a ApplymentCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplymentCourse we want to update
     *   }
     * })
     */
    upsert<T extends applymentCourseUpsertArgs>(args: SelectSubset<T, applymentCourseUpsertArgs<ExtArgs>>): Prisma__applymentCourseClient<$Result.GetResult<Prisma.$applymentCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplymentCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseCountArgs} args - Arguments to filter ApplymentCourses to count.
     * @example
     * // Count the number of ApplymentCourses
     * const count = await prisma.applymentCourse.count({
     *   where: {
     *     // ... the filter for the ApplymentCourses we want to count
     *   }
     * })
    **/
    count<T extends applymentCourseCountArgs>(
      args?: Subset<T, applymentCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplymentCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplymentCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplymentCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplymentCourseAggregateArgs>(args: Subset<T, ApplymentCourseAggregateArgs>): Prisma.PrismaPromise<GetApplymentCourseAggregateType<T>>

    /**
     * Group by ApplymentCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applymentCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applymentCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applymentCourseGroupByArgs['orderBy'] }
        : { orderBy?: applymentCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applymentCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplymentCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applymentCourse model
   */
  readonly fields: applymentCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applymentCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applymentCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applyment<T extends applymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, applymentDefaultArgs<ExtArgs>>): Prisma__applymentClient<$Result.GetResult<Prisma.$applymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the applymentCourse model
   */
  interface applymentCourseFieldRefs {
    readonly id: FieldRef<"applymentCourse", 'String'>
    readonly course_id: FieldRef<"applymentCourse", 'String'>
    readonly applyment_id: FieldRef<"applymentCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * applymentCourse findUnique
   */
  export type applymentCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter, which applymentCourse to fetch.
     */
    where: applymentCourseWhereUniqueInput
  }

  /**
   * applymentCourse findUniqueOrThrow
   */
  export type applymentCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter, which applymentCourse to fetch.
     */
    where: applymentCourseWhereUniqueInput
  }

  /**
   * applymentCourse findFirst
   */
  export type applymentCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter, which applymentCourse to fetch.
     */
    where?: applymentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applymentCourses to fetch.
     */
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applymentCourses.
     */
    cursor?: applymentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applymentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applymentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applymentCourses.
     */
    distinct?: ApplymentCourseScalarFieldEnum | ApplymentCourseScalarFieldEnum[]
  }

  /**
   * applymentCourse findFirstOrThrow
   */
  export type applymentCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter, which applymentCourse to fetch.
     */
    where?: applymentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applymentCourses to fetch.
     */
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applymentCourses.
     */
    cursor?: applymentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applymentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applymentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applymentCourses.
     */
    distinct?: ApplymentCourseScalarFieldEnum | ApplymentCourseScalarFieldEnum[]
  }

  /**
   * applymentCourse findMany
   */
  export type applymentCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter, which applymentCourses to fetch.
     */
    where?: applymentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applymentCourses to fetch.
     */
    orderBy?: applymentCourseOrderByWithRelationInput | applymentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applymentCourses.
     */
    cursor?: applymentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applymentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applymentCourses.
     */
    skip?: number
    distinct?: ApplymentCourseScalarFieldEnum | ApplymentCourseScalarFieldEnum[]
  }

  /**
   * applymentCourse create
   */
  export type applymentCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a applymentCourse.
     */
    data: XOR<applymentCourseCreateInput, applymentCourseUncheckedCreateInput>
  }

  /**
   * applymentCourse createMany
   */
  export type applymentCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applymentCourses.
     */
    data: applymentCourseCreateManyInput | applymentCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applymentCourse update
   */
  export type applymentCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a applymentCourse.
     */
    data: XOR<applymentCourseUpdateInput, applymentCourseUncheckedUpdateInput>
    /**
     * Choose, which applymentCourse to update.
     */
    where: applymentCourseWhereUniqueInput
  }

  /**
   * applymentCourse updateMany
   */
  export type applymentCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applymentCourses.
     */
    data: XOR<applymentCourseUpdateManyMutationInput, applymentCourseUncheckedUpdateManyInput>
    /**
     * Filter which applymentCourses to update
     */
    where?: applymentCourseWhereInput
    /**
     * Limit how many applymentCourses to update.
     */
    limit?: number
  }

  /**
   * applymentCourse upsert
   */
  export type applymentCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the applymentCourse to update in case it exists.
     */
    where: applymentCourseWhereUniqueInput
    /**
     * In case the applymentCourse found by the `where` argument doesn't exist, create a new applymentCourse with this data.
     */
    create: XOR<applymentCourseCreateInput, applymentCourseUncheckedCreateInput>
    /**
     * In case the applymentCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applymentCourseUpdateInput, applymentCourseUncheckedUpdateInput>
  }

  /**
   * applymentCourse delete
   */
  export type applymentCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
    /**
     * Filter which applymentCourse to delete.
     */
    where: applymentCourseWhereUniqueInput
  }

  /**
   * applymentCourse deleteMany
   */
  export type applymentCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applymentCourses to delete
     */
    where?: applymentCourseWhereInput
    /**
     * Limit how many applymentCourses to delete.
     */
    limit?: number
  }

  /**
   * applymentCourse without action
   */
  export type applymentCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applymentCourse
     */
    select?: applymentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applymentCourse
     */
    omit?: applymentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applymentCourseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    bi_number: 'bi_number',
    date_birth: 'date_birth',
    address: 'address',
    password: 'password',
    status: 'status',
    permitions: 'permitions',
    roles: 'roles'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolershipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coutry: 'coutry',
    start_at: 'start_at',
    end_at: 'end_at',
    status: 'status'
  };

  export type SchoolershipScalarFieldEnum = (typeof SchoolershipScalarFieldEnum)[keyof typeof SchoolershipScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    vacancies: 'vacancies',
    schoolership_id: 'schoolership_id'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ApplymentScalarFieldEnum: {
    id: 'id',
    number: 'number',
    user_id: 'user_id'
  };

  export type ApplymentScalarFieldEnum = (typeof ApplymentScalarFieldEnum)[keyof typeof ApplymentScalarFieldEnum]


  export const ApplymentCourseScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    applyment_id: 'applyment_id'
  };

  export type ApplymentCourseScalarFieldEnum = (typeof ApplymentCourseScalarFieldEnum)[keyof typeof ApplymentCourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    bi_number: 'bi_number',
    date_birth: 'date_birth',
    address: 'address',
    password: 'password',
    status: 'status'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const schoolershipOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    coutry: 'coutry',
    status: 'status'
  };

  export type schoolershipOrderByRelevanceFieldEnum = (typeof schoolershipOrderByRelevanceFieldEnum)[keyof typeof schoolershipOrderByRelevanceFieldEnum]


  export const courseOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    vacancies: 'vacancies',
    schoolership_id: 'schoolership_id'
  };

  export type courseOrderByRelevanceFieldEnum = (typeof courseOrderByRelevanceFieldEnum)[keyof typeof courseOrderByRelevanceFieldEnum]


  export const applymentOrderByRelevanceFieldEnum: {
    id: 'id',
    number: 'number',
    user_id: 'user_id'
  };

  export type applymentOrderByRelevanceFieldEnum = (typeof applymentOrderByRelevanceFieldEnum)[keyof typeof applymentOrderByRelevanceFieldEnum]


  export const applymentCourseOrderByRelevanceFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    applyment_id: 'applyment_id'
  };

  export type applymentCourseOrderByRelevanceFieldEnum = (typeof applymentCourseOrderByRelevanceFieldEnum)[keyof typeof applymentCourseOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    bi_number?: StringFilter<"user"> | string
    date_birth?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    status?: StringFilter<"user"> | string
    permitions?: JsonFilter<"user">
    roles?: JsonFilter<"user">
    applyemnt?: ApplymentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bi_number?: SortOrder
    date_birth?: SortOrder
    address?: SortOrder
    password?: SortOrder
    status?: SortOrder
    permitions?: SortOrder
    roles?: SortOrder
    applyemnt?: applymentOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    bi_number?: StringFilter<"user"> | string
    date_birth?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    status?: StringFilter<"user"> | string
    permitions?: JsonFilter<"user">
    roles?: JsonFilter<"user">
    applyemnt?: ApplymentListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bi_number?: SortOrder
    date_birth?: SortOrder
    address?: SortOrder
    password?: SortOrder
    status?: SortOrder
    permitions?: SortOrder
    roles?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    bi_number?: StringWithAggregatesFilter<"user"> | string
    date_birth?: StringWithAggregatesFilter<"user"> | string
    address?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    status?: StringWithAggregatesFilter<"user"> | string
    permitions?: JsonWithAggregatesFilter<"user">
    roles?: JsonWithAggregatesFilter<"user">
  }

  export type schoolershipWhereInput = {
    AND?: schoolershipWhereInput | schoolershipWhereInput[]
    OR?: schoolershipWhereInput[]
    NOT?: schoolershipWhereInput | schoolershipWhereInput[]
    id?: StringFilter<"schoolership"> | string
    name?: StringFilter<"schoolership"> | string
    coutry?: StringFilter<"schoolership"> | string
    start_at?: DateTimeFilter<"schoolership"> | Date | string
    end_at?: DateTimeFilter<"schoolership"> | Date | string
    status?: StringFilter<"schoolership"> | string
    course?: CourseListRelationFilter
  }

  export type schoolershipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coutry?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    course?: courseOrderByRelationAggregateInput
    _relevance?: schoolershipOrderByRelevanceInput
  }

  export type schoolershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: schoolershipWhereInput | schoolershipWhereInput[]
    OR?: schoolershipWhereInput[]
    NOT?: schoolershipWhereInput | schoolershipWhereInput[]
    name?: StringFilter<"schoolership"> | string
    coutry?: StringFilter<"schoolership"> | string
    start_at?: DateTimeFilter<"schoolership"> | Date | string
    end_at?: DateTimeFilter<"schoolership"> | Date | string
    status?: StringFilter<"schoolership"> | string
    course?: CourseListRelationFilter
  }, "id">

  export type schoolershipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coutry?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    _count?: schoolershipCountOrderByAggregateInput
    _max?: schoolershipMaxOrderByAggregateInput
    _min?: schoolershipMinOrderByAggregateInput
  }

  export type schoolershipScalarWhereWithAggregatesInput = {
    AND?: schoolershipScalarWhereWithAggregatesInput | schoolershipScalarWhereWithAggregatesInput[]
    OR?: schoolershipScalarWhereWithAggregatesInput[]
    NOT?: schoolershipScalarWhereWithAggregatesInput | schoolershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"schoolership"> | string
    name?: StringWithAggregatesFilter<"schoolership"> | string
    coutry?: StringWithAggregatesFilter<"schoolership"> | string
    start_at?: DateTimeWithAggregatesFilter<"schoolership"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"schoolership"> | Date | string
    status?: StringWithAggregatesFilter<"schoolership"> | string
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: StringFilter<"course"> | string
    name?: StringFilter<"course"> | string
    vacancies?: StringFilter<"course"> | string
    schoolership_id?: StringFilter<"course"> | string
    schoolership?: XOR<SchoolershipScalarRelationFilter, schoolershipWhereInput>
    ApplymentCourse?: ApplymentCourseListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vacancies?: SortOrder
    schoolership_id?: SortOrder
    schoolership?: schoolershipOrderByWithRelationInput
    ApplymentCourse?: applymentCourseOrderByRelationAggregateInput
    _relevance?: courseOrderByRelevanceInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    name?: StringFilter<"course"> | string
    vacancies?: StringFilter<"course"> | string
    schoolership_id?: StringFilter<"course"> | string
    schoolership?: XOR<SchoolershipScalarRelationFilter, schoolershipWhereInput>
    ApplymentCourse?: ApplymentCourseListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    vacancies?: SortOrder
    schoolership_id?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course"> | string
    name?: StringWithAggregatesFilter<"course"> | string
    vacancies?: StringWithAggregatesFilter<"course"> | string
    schoolership_id?: StringWithAggregatesFilter<"course"> | string
  }

  export type applymentWhereInput = {
    AND?: applymentWhereInput | applymentWhereInput[]
    OR?: applymentWhereInput[]
    NOT?: applymentWhereInput | applymentWhereInput[]
    id?: StringFilter<"applyment"> | string
    number?: StringFilter<"applyment"> | string
    user_id?: StringFilter<"applyment"> | string
    User?: XOR<UserScalarRelationFilter, userWhereInput>
    ApplymentCourse?: ApplymentCourseListRelationFilter
  }

  export type applymentOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    user_id?: SortOrder
    User?: userOrderByWithRelationInput
    ApplymentCourse?: applymentCourseOrderByRelationAggregateInput
    _relevance?: applymentOrderByRelevanceInput
  }

  export type applymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: applymentWhereInput | applymentWhereInput[]
    OR?: applymentWhereInput[]
    NOT?: applymentWhereInput | applymentWhereInput[]
    number?: StringFilter<"applyment"> | string
    user_id?: StringFilter<"applyment"> | string
    User?: XOR<UserScalarRelationFilter, userWhereInput>
    ApplymentCourse?: ApplymentCourseListRelationFilter
  }, "id">

  export type applymentOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    user_id?: SortOrder
    _count?: applymentCountOrderByAggregateInput
    _max?: applymentMaxOrderByAggregateInput
    _min?: applymentMinOrderByAggregateInput
  }

  export type applymentScalarWhereWithAggregatesInput = {
    AND?: applymentScalarWhereWithAggregatesInput | applymentScalarWhereWithAggregatesInput[]
    OR?: applymentScalarWhereWithAggregatesInput[]
    NOT?: applymentScalarWhereWithAggregatesInput | applymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"applyment"> | string
    number?: StringWithAggregatesFilter<"applyment"> | string
    user_id?: StringWithAggregatesFilter<"applyment"> | string
  }

  export type applymentCourseWhereInput = {
    AND?: applymentCourseWhereInput | applymentCourseWhereInput[]
    OR?: applymentCourseWhereInput[]
    NOT?: applymentCourseWhereInput | applymentCourseWhereInput[]
    id?: StringFilter<"applymentCourse"> | string
    course_id?: StringFilter<"applymentCourse"> | string
    applyment_id?: StringFilter<"applymentCourse"> | string
    Course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    applyment?: XOR<ApplymentScalarRelationFilter, applymentWhereInput>
  }

  export type applymentCourseOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    applyment_id?: SortOrder
    Course?: courseOrderByWithRelationInput
    applyment?: applymentOrderByWithRelationInput
    _relevance?: applymentCourseOrderByRelevanceInput
  }

  export type applymentCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: applymentCourseWhereInput | applymentCourseWhereInput[]
    OR?: applymentCourseWhereInput[]
    NOT?: applymentCourseWhereInput | applymentCourseWhereInput[]
    course_id?: StringFilter<"applymentCourse"> | string
    applyment_id?: StringFilter<"applymentCourse"> | string
    Course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    applyment?: XOR<ApplymentScalarRelationFilter, applymentWhereInput>
  }, "id">

  export type applymentCourseOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    applyment_id?: SortOrder
    _count?: applymentCourseCountOrderByAggregateInput
    _max?: applymentCourseMaxOrderByAggregateInput
    _min?: applymentCourseMinOrderByAggregateInput
  }

  export type applymentCourseScalarWhereWithAggregatesInput = {
    AND?: applymentCourseScalarWhereWithAggregatesInput | applymentCourseScalarWhereWithAggregatesInput[]
    OR?: applymentCourseScalarWhereWithAggregatesInput[]
    NOT?: applymentCourseScalarWhereWithAggregatesInput | applymentCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"applymentCourse"> | string
    course_id?: StringWithAggregatesFilter<"applymentCourse"> | string
    applyment_id?: StringWithAggregatesFilter<"applymentCourse"> | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonNullValueInput | InputJsonValue
    roles: JsonNullValueInput | InputJsonValue
    applyemnt?: applymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonNullValueInput | InputJsonValue
    roles: JsonNullValueInput | InputJsonValue
    applyemnt?: applymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
    applyemnt?: applymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
    applyemnt?: applymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonNullValueInput | InputJsonValue
    roles: JsonNullValueInput | InputJsonValue
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
  }

  export type schoolershipCreateInput = {
    id?: string
    name: string
    coutry: string
    start_at: Date | string
    end_at: Date | string
    status: string
    course?: courseCreateNestedManyWithoutSchoolershipInput
  }

  export type schoolershipUncheckedCreateInput = {
    id?: string
    name: string
    coutry: string
    start_at: Date | string
    end_at: Date | string
    status: string
    course?: courseUncheckedCreateNestedManyWithoutSchoolershipInput
  }

  export type schoolershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateManyWithoutSchoolershipNestedInput
  }

  export type schoolershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    course?: courseUncheckedUpdateManyWithoutSchoolershipNestedInput
  }

  export type schoolershipCreateManyInput = {
    id?: string
    name: string
    coutry: string
    start_at: Date | string
    end_at: Date | string
    status: string
  }

  export type schoolershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type schoolershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type courseCreateInput = {
    id?: string
    name: string
    vacancies: string
    schoolership: schoolershipCreateNestedOneWithoutCourseInput
    ApplymentCourse?: applymentCourseCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: string
    name: string
    vacancies: string
    schoolership_id: string
    ApplymentCourse?: applymentCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    schoolership?: schoolershipUpdateOneRequiredWithoutCourseNestedInput
    ApplymentCourse?: applymentCourseUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    schoolership_id?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: string
    name: string
    vacancies: string
    schoolership_id: string
  }

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
  }

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    schoolership_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCreateInput = {
    id?: string
    number: string
    User: userCreateNestedOneWithoutApplyemntInput
    ApplymentCourse?: applymentCourseCreateNestedManyWithoutApplymentInput
  }

  export type applymentUncheckedCreateInput = {
    id?: string
    number: string
    user_id: string
    ApplymentCourse?: applymentCourseUncheckedCreateNestedManyWithoutApplymentInput
  }

  export type applymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    User?: userUpdateOneRequiredWithoutApplyemntNestedInput
    ApplymentCourse?: applymentCourseUpdateManyWithoutApplymentNestedInput
  }

  export type applymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUncheckedUpdateManyWithoutApplymentNestedInput
  }

  export type applymentCreateManyInput = {
    id?: string
    number: string
    user_id: string
  }

  export type applymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type applymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseCreateInput = {
    id?: string
    Course: courseCreateNestedOneWithoutApplymentCourseInput
    applyment: applymentCreateNestedOneWithoutApplymentCourseInput
  }

  export type applymentCourseUncheckedCreateInput = {
    id?: string
    course_id: string
    applyment_id: string
  }

  export type applymentCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Course?: courseUpdateOneRequiredWithoutApplymentCourseNestedInput
    applyment?: applymentUpdateOneRequiredWithoutApplymentCourseNestedInput
  }

  export type applymentCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    applyment_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseCreateManyInput = {
    id?: string
    course_id: string
    applyment_id: string
  }

  export type applymentCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    applyment_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ApplymentListRelationFilter = {
    every?: applymentWhereInput
    some?: applymentWhereInput
    none?: applymentWhereInput
  }

  export type applymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bi_number?: SortOrder
    date_birth?: SortOrder
    address?: SortOrder
    password?: SortOrder
    status?: SortOrder
    permitions?: SortOrder
    roles?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bi_number?: SortOrder
    date_birth?: SortOrder
    address?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bi_number?: SortOrder
    date_birth?: SortOrder
    address?: SortOrder
    password?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schoolershipOrderByRelevanceInput = {
    fields: schoolershipOrderByRelevanceFieldEnum | schoolershipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type schoolershipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coutry?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
  }

  export type schoolershipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coutry?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
  }

  export type schoolershipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coutry?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SchoolershipScalarRelationFilter = {
    is?: schoolershipWhereInput
    isNot?: schoolershipWhereInput
  }

  export type ApplymentCourseListRelationFilter = {
    every?: applymentCourseWhereInput
    some?: applymentCourseWhereInput
    none?: applymentCourseWhereInput
  }

  export type applymentCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseOrderByRelevanceInput = {
    fields: courseOrderByRelevanceFieldEnum | courseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vacancies?: SortOrder
    schoolership_id?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vacancies?: SortOrder
    schoolership_id?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vacancies?: SortOrder
    schoolership_id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type applymentOrderByRelevanceInput = {
    fields: applymentOrderByRelevanceFieldEnum | applymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type applymentCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    user_id?: SortOrder
  }

  export type applymentMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    user_id?: SortOrder
  }

  export type applymentMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    user_id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type ApplymentScalarRelationFilter = {
    is?: applymentWhereInput
    isNot?: applymentWhereInput
  }

  export type applymentCourseOrderByRelevanceInput = {
    fields: applymentCourseOrderByRelevanceFieldEnum | applymentCourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type applymentCourseCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    applyment_id?: SortOrder
  }

  export type applymentCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    applyment_id?: SortOrder
  }

  export type applymentCourseMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    applyment_id?: SortOrder
  }

  export type applymentCreateNestedManyWithoutUserInput = {
    create?: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput> | applymentCreateWithoutUserInput[] | applymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applymentCreateOrConnectWithoutUserInput | applymentCreateOrConnectWithoutUserInput[]
    createMany?: applymentCreateManyUserInputEnvelope
    connect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
  }

  export type applymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput> | applymentCreateWithoutUserInput[] | applymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applymentCreateOrConnectWithoutUserInput | applymentCreateOrConnectWithoutUserInput[]
    createMany?: applymentCreateManyUserInputEnvelope
    connect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type applymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput> | applymentCreateWithoutUserInput[] | applymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applymentCreateOrConnectWithoutUserInput | applymentCreateOrConnectWithoutUserInput[]
    upsert?: applymentUpsertWithWhereUniqueWithoutUserInput | applymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applymentCreateManyUserInputEnvelope
    set?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    disconnect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    delete?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    connect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    update?: applymentUpdateWithWhereUniqueWithoutUserInput | applymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applymentUpdateManyWithWhereWithoutUserInput | applymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applymentScalarWhereInput | applymentScalarWhereInput[]
  }

  export type applymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput> | applymentCreateWithoutUserInput[] | applymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: applymentCreateOrConnectWithoutUserInput | applymentCreateOrConnectWithoutUserInput[]
    upsert?: applymentUpsertWithWhereUniqueWithoutUserInput | applymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: applymentCreateManyUserInputEnvelope
    set?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    disconnect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    delete?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    connect?: applymentWhereUniqueInput | applymentWhereUniqueInput[]
    update?: applymentUpdateWithWhereUniqueWithoutUserInput | applymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: applymentUpdateManyWithWhereWithoutUserInput | applymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: applymentScalarWhereInput | applymentScalarWhereInput[]
  }

  export type courseCreateNestedManyWithoutSchoolershipInput = {
    create?: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput> | courseCreateWithoutSchoolershipInput[] | courseUncheckedCreateWithoutSchoolershipInput[]
    connectOrCreate?: courseCreateOrConnectWithoutSchoolershipInput | courseCreateOrConnectWithoutSchoolershipInput[]
    createMany?: courseCreateManySchoolershipInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutSchoolershipInput = {
    create?: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput> | courseCreateWithoutSchoolershipInput[] | courseUncheckedCreateWithoutSchoolershipInput[]
    connectOrCreate?: courseCreateOrConnectWithoutSchoolershipInput | courseCreateOrConnectWithoutSchoolershipInput[]
    createMany?: courseCreateManySchoolershipInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type courseUpdateManyWithoutSchoolershipNestedInput = {
    create?: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput> | courseCreateWithoutSchoolershipInput[] | courseUncheckedCreateWithoutSchoolershipInput[]
    connectOrCreate?: courseCreateOrConnectWithoutSchoolershipInput | courseCreateOrConnectWithoutSchoolershipInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutSchoolershipInput | courseUpsertWithWhereUniqueWithoutSchoolershipInput[]
    createMany?: courseCreateManySchoolershipInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutSchoolershipInput | courseUpdateWithWhereUniqueWithoutSchoolershipInput[]
    updateMany?: courseUpdateManyWithWhereWithoutSchoolershipInput | courseUpdateManyWithWhereWithoutSchoolershipInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutSchoolershipNestedInput = {
    create?: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput> | courseCreateWithoutSchoolershipInput[] | courseUncheckedCreateWithoutSchoolershipInput[]
    connectOrCreate?: courseCreateOrConnectWithoutSchoolershipInput | courseCreateOrConnectWithoutSchoolershipInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutSchoolershipInput | courseUpsertWithWhereUniqueWithoutSchoolershipInput[]
    createMany?: courseCreateManySchoolershipInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutSchoolershipInput | courseUpdateWithWhereUniqueWithoutSchoolershipInput[]
    updateMany?: courseUpdateManyWithWhereWithoutSchoolershipInput | courseUpdateManyWithWhereWithoutSchoolershipInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type schoolershipCreateNestedOneWithoutCourseInput = {
    create?: XOR<schoolershipCreateWithoutCourseInput, schoolershipUncheckedCreateWithoutCourseInput>
    connectOrCreate?: schoolershipCreateOrConnectWithoutCourseInput
    connect?: schoolershipWhereUniqueInput
  }

  export type applymentCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput> | applymentCourseCreateWithoutCourseInput[] | applymentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutCourseInput | applymentCourseCreateOrConnectWithoutCourseInput[]
    createMany?: applymentCourseCreateManyCourseInputEnvelope
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
  }

  export type applymentCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput> | applymentCourseCreateWithoutCourseInput[] | applymentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutCourseInput | applymentCourseCreateOrConnectWithoutCourseInput[]
    createMany?: applymentCourseCreateManyCourseInputEnvelope
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
  }

  export type schoolershipUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<schoolershipCreateWithoutCourseInput, schoolershipUncheckedCreateWithoutCourseInput>
    connectOrCreate?: schoolershipCreateOrConnectWithoutCourseInput
    upsert?: schoolershipUpsertWithoutCourseInput
    connect?: schoolershipWhereUniqueInput
    update?: XOR<XOR<schoolershipUpdateToOneWithWhereWithoutCourseInput, schoolershipUpdateWithoutCourseInput>, schoolershipUncheckedUpdateWithoutCourseInput>
  }

  export type applymentCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput> | applymentCourseCreateWithoutCourseInput[] | applymentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutCourseInput | applymentCourseCreateOrConnectWithoutCourseInput[]
    upsert?: applymentCourseUpsertWithWhereUniqueWithoutCourseInput | applymentCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: applymentCourseCreateManyCourseInputEnvelope
    set?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    disconnect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    delete?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    update?: applymentCourseUpdateWithWhereUniqueWithoutCourseInput | applymentCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: applymentCourseUpdateManyWithWhereWithoutCourseInput | applymentCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
  }

  export type applymentCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput> | applymentCourseCreateWithoutCourseInput[] | applymentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutCourseInput | applymentCourseCreateOrConnectWithoutCourseInput[]
    upsert?: applymentCourseUpsertWithWhereUniqueWithoutCourseInput | applymentCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: applymentCourseCreateManyCourseInputEnvelope
    set?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    disconnect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    delete?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    update?: applymentCourseUpdateWithWhereUniqueWithoutCourseInput | applymentCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: applymentCourseUpdateManyWithWhereWithoutCourseInput | applymentCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutApplyemntInput = {
    create?: XOR<userCreateWithoutApplyemntInput, userUncheckedCreateWithoutApplyemntInput>
    connectOrCreate?: userCreateOrConnectWithoutApplyemntInput
    connect?: userWhereUniqueInput
  }

  export type applymentCourseCreateNestedManyWithoutApplymentInput = {
    create?: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput> | applymentCourseCreateWithoutApplymentInput[] | applymentCourseUncheckedCreateWithoutApplymentInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutApplymentInput | applymentCourseCreateOrConnectWithoutApplymentInput[]
    createMany?: applymentCourseCreateManyApplymentInputEnvelope
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
  }

  export type applymentCourseUncheckedCreateNestedManyWithoutApplymentInput = {
    create?: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput> | applymentCourseCreateWithoutApplymentInput[] | applymentCourseUncheckedCreateWithoutApplymentInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutApplymentInput | applymentCourseCreateOrConnectWithoutApplymentInput[]
    createMany?: applymentCourseCreateManyApplymentInputEnvelope
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutApplyemntNestedInput = {
    create?: XOR<userCreateWithoutApplyemntInput, userUncheckedCreateWithoutApplyemntInput>
    connectOrCreate?: userCreateOrConnectWithoutApplyemntInput
    upsert?: userUpsertWithoutApplyemntInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutApplyemntInput, userUpdateWithoutApplyemntInput>, userUncheckedUpdateWithoutApplyemntInput>
  }

  export type applymentCourseUpdateManyWithoutApplymentNestedInput = {
    create?: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput> | applymentCourseCreateWithoutApplymentInput[] | applymentCourseUncheckedCreateWithoutApplymentInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutApplymentInput | applymentCourseCreateOrConnectWithoutApplymentInput[]
    upsert?: applymentCourseUpsertWithWhereUniqueWithoutApplymentInput | applymentCourseUpsertWithWhereUniqueWithoutApplymentInput[]
    createMany?: applymentCourseCreateManyApplymentInputEnvelope
    set?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    disconnect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    delete?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    update?: applymentCourseUpdateWithWhereUniqueWithoutApplymentInput | applymentCourseUpdateWithWhereUniqueWithoutApplymentInput[]
    updateMany?: applymentCourseUpdateManyWithWhereWithoutApplymentInput | applymentCourseUpdateManyWithWhereWithoutApplymentInput[]
    deleteMany?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
  }

  export type applymentCourseUncheckedUpdateManyWithoutApplymentNestedInput = {
    create?: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput> | applymentCourseCreateWithoutApplymentInput[] | applymentCourseUncheckedCreateWithoutApplymentInput[]
    connectOrCreate?: applymentCourseCreateOrConnectWithoutApplymentInput | applymentCourseCreateOrConnectWithoutApplymentInput[]
    upsert?: applymentCourseUpsertWithWhereUniqueWithoutApplymentInput | applymentCourseUpsertWithWhereUniqueWithoutApplymentInput[]
    createMany?: applymentCourseCreateManyApplymentInputEnvelope
    set?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    disconnect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    delete?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    connect?: applymentCourseWhereUniqueInput | applymentCourseWhereUniqueInput[]
    update?: applymentCourseUpdateWithWhereUniqueWithoutApplymentInput | applymentCourseUpdateWithWhereUniqueWithoutApplymentInput[]
    updateMany?: applymentCourseUpdateManyWithWhereWithoutApplymentInput | applymentCourseUpdateManyWithWhereWithoutApplymentInput[]
    deleteMany?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutApplymentCourseInput = {
    create?: XOR<courseCreateWithoutApplymentCourseInput, courseUncheckedCreateWithoutApplymentCourseInput>
    connectOrCreate?: courseCreateOrConnectWithoutApplymentCourseInput
    connect?: courseWhereUniqueInput
  }

  export type applymentCreateNestedOneWithoutApplymentCourseInput = {
    create?: XOR<applymentCreateWithoutApplymentCourseInput, applymentUncheckedCreateWithoutApplymentCourseInput>
    connectOrCreate?: applymentCreateOrConnectWithoutApplymentCourseInput
    connect?: applymentWhereUniqueInput
  }

  export type courseUpdateOneRequiredWithoutApplymentCourseNestedInput = {
    create?: XOR<courseCreateWithoutApplymentCourseInput, courseUncheckedCreateWithoutApplymentCourseInput>
    connectOrCreate?: courseCreateOrConnectWithoutApplymentCourseInput
    upsert?: courseUpsertWithoutApplymentCourseInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutApplymentCourseInput, courseUpdateWithoutApplymentCourseInput>, courseUncheckedUpdateWithoutApplymentCourseInput>
  }

  export type applymentUpdateOneRequiredWithoutApplymentCourseNestedInput = {
    create?: XOR<applymentCreateWithoutApplymentCourseInput, applymentUncheckedCreateWithoutApplymentCourseInput>
    connectOrCreate?: applymentCreateOrConnectWithoutApplymentCourseInput
    upsert?: applymentUpsertWithoutApplymentCourseInput
    connect?: applymentWhereUniqueInput
    update?: XOR<XOR<applymentUpdateToOneWithWhereWithoutApplymentCourseInput, applymentUpdateWithoutApplymentCourseInput>, applymentUncheckedUpdateWithoutApplymentCourseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type applymentCreateWithoutUserInput = {
    id?: string
    number: string
    ApplymentCourse?: applymentCourseCreateNestedManyWithoutApplymentInput
  }

  export type applymentUncheckedCreateWithoutUserInput = {
    id?: string
    number: string
    ApplymentCourse?: applymentCourseUncheckedCreateNestedManyWithoutApplymentInput
  }

  export type applymentCreateOrConnectWithoutUserInput = {
    where: applymentWhereUniqueInput
    create: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput>
  }

  export type applymentCreateManyUserInputEnvelope = {
    data: applymentCreateManyUserInput | applymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type applymentUpsertWithWhereUniqueWithoutUserInput = {
    where: applymentWhereUniqueInput
    update: XOR<applymentUpdateWithoutUserInput, applymentUncheckedUpdateWithoutUserInput>
    create: XOR<applymentCreateWithoutUserInput, applymentUncheckedCreateWithoutUserInput>
  }

  export type applymentUpdateWithWhereUniqueWithoutUserInput = {
    where: applymentWhereUniqueInput
    data: XOR<applymentUpdateWithoutUserInput, applymentUncheckedUpdateWithoutUserInput>
  }

  export type applymentUpdateManyWithWhereWithoutUserInput = {
    where: applymentScalarWhereInput
    data: XOR<applymentUpdateManyMutationInput, applymentUncheckedUpdateManyWithoutUserInput>
  }

  export type applymentScalarWhereInput = {
    AND?: applymentScalarWhereInput | applymentScalarWhereInput[]
    OR?: applymentScalarWhereInput[]
    NOT?: applymentScalarWhereInput | applymentScalarWhereInput[]
    id?: StringFilter<"applyment"> | string
    number?: StringFilter<"applyment"> | string
    user_id?: StringFilter<"applyment"> | string
  }

  export type courseCreateWithoutSchoolershipInput = {
    id?: string
    name: string
    vacancies: string
    ApplymentCourse?: applymentCourseCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutSchoolershipInput = {
    id?: string
    name: string
    vacancies: string
    ApplymentCourse?: applymentCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutSchoolershipInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput>
  }

  export type courseCreateManySchoolershipInputEnvelope = {
    data: courseCreateManySchoolershipInput | courseCreateManySchoolershipInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutSchoolershipInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutSchoolershipInput, courseUncheckedUpdateWithoutSchoolershipInput>
    create: XOR<courseCreateWithoutSchoolershipInput, courseUncheckedCreateWithoutSchoolershipInput>
  }

  export type courseUpdateWithWhereUniqueWithoutSchoolershipInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutSchoolershipInput, courseUncheckedUpdateWithoutSchoolershipInput>
  }

  export type courseUpdateManyWithWhereWithoutSchoolershipInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutSchoolershipInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id?: StringFilter<"course"> | string
    name?: StringFilter<"course"> | string
    vacancies?: StringFilter<"course"> | string
    schoolership_id?: StringFilter<"course"> | string
  }

  export type schoolershipCreateWithoutCourseInput = {
    id?: string
    name: string
    coutry: string
    start_at: Date | string
    end_at: Date | string
    status: string
  }

  export type schoolershipUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    coutry: string
    start_at: Date | string
    end_at: Date | string
    status: string
  }

  export type schoolershipCreateOrConnectWithoutCourseInput = {
    where: schoolershipWhereUniqueInput
    create: XOR<schoolershipCreateWithoutCourseInput, schoolershipUncheckedCreateWithoutCourseInput>
  }

  export type applymentCourseCreateWithoutCourseInput = {
    id?: string
    applyment: applymentCreateNestedOneWithoutApplymentCourseInput
  }

  export type applymentCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    applyment_id: string
  }

  export type applymentCourseCreateOrConnectWithoutCourseInput = {
    where: applymentCourseWhereUniqueInput
    create: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput>
  }

  export type applymentCourseCreateManyCourseInputEnvelope = {
    data: applymentCourseCreateManyCourseInput | applymentCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type schoolershipUpsertWithoutCourseInput = {
    update: XOR<schoolershipUpdateWithoutCourseInput, schoolershipUncheckedUpdateWithoutCourseInput>
    create: XOR<schoolershipCreateWithoutCourseInput, schoolershipUncheckedCreateWithoutCourseInput>
    where?: schoolershipWhereInput
  }

  export type schoolershipUpdateToOneWithWhereWithoutCourseInput = {
    where?: schoolershipWhereInput
    data: XOR<schoolershipUpdateWithoutCourseInput, schoolershipUncheckedUpdateWithoutCourseInput>
  }

  export type schoolershipUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type schoolershipUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coutry?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: applymentCourseWhereUniqueInput
    update: XOR<applymentCourseUpdateWithoutCourseInput, applymentCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<applymentCourseCreateWithoutCourseInput, applymentCourseUncheckedCreateWithoutCourseInput>
  }

  export type applymentCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: applymentCourseWhereUniqueInput
    data: XOR<applymentCourseUpdateWithoutCourseInput, applymentCourseUncheckedUpdateWithoutCourseInput>
  }

  export type applymentCourseUpdateManyWithWhereWithoutCourseInput = {
    where: applymentCourseScalarWhereInput
    data: XOR<applymentCourseUpdateManyMutationInput, applymentCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type applymentCourseScalarWhereInput = {
    AND?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
    OR?: applymentCourseScalarWhereInput[]
    NOT?: applymentCourseScalarWhereInput | applymentCourseScalarWhereInput[]
    id?: StringFilter<"applymentCourse"> | string
    course_id?: StringFilter<"applymentCourse"> | string
    applyment_id?: StringFilter<"applymentCourse"> | string
  }

  export type userCreateWithoutApplyemntInput = {
    id?: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonNullValueInput | InputJsonValue
    roles: JsonNullValueInput | InputJsonValue
  }

  export type userUncheckedCreateWithoutApplyemntInput = {
    id?: string
    name: string
    email: string
    bi_number: string
    date_birth: string
    address: string
    password: string
    status: string
    permitions: JsonNullValueInput | InputJsonValue
    roles: JsonNullValueInput | InputJsonValue
  }

  export type userCreateOrConnectWithoutApplyemntInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutApplyemntInput, userUncheckedCreateWithoutApplyemntInput>
  }

  export type applymentCourseCreateWithoutApplymentInput = {
    id?: string
    Course: courseCreateNestedOneWithoutApplymentCourseInput
  }

  export type applymentCourseUncheckedCreateWithoutApplymentInput = {
    id?: string
    course_id: string
  }

  export type applymentCourseCreateOrConnectWithoutApplymentInput = {
    where: applymentCourseWhereUniqueInput
    create: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput>
  }

  export type applymentCourseCreateManyApplymentInputEnvelope = {
    data: applymentCourseCreateManyApplymentInput | applymentCourseCreateManyApplymentInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutApplyemntInput = {
    update: XOR<userUpdateWithoutApplyemntInput, userUncheckedUpdateWithoutApplyemntInput>
    create: XOR<userCreateWithoutApplyemntInput, userUncheckedCreateWithoutApplyemntInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutApplyemntInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutApplyemntInput, userUncheckedUpdateWithoutApplyemntInput>
  }

  export type userUpdateWithoutApplyemntInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
  }

  export type userUncheckedUpdateWithoutApplyemntInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bi_number?: StringFieldUpdateOperationsInput | string
    date_birth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    permitions?: JsonNullValueInput | InputJsonValue
    roles?: JsonNullValueInput | InputJsonValue
  }

  export type applymentCourseUpsertWithWhereUniqueWithoutApplymentInput = {
    where: applymentCourseWhereUniqueInput
    update: XOR<applymentCourseUpdateWithoutApplymentInput, applymentCourseUncheckedUpdateWithoutApplymentInput>
    create: XOR<applymentCourseCreateWithoutApplymentInput, applymentCourseUncheckedCreateWithoutApplymentInput>
  }

  export type applymentCourseUpdateWithWhereUniqueWithoutApplymentInput = {
    where: applymentCourseWhereUniqueInput
    data: XOR<applymentCourseUpdateWithoutApplymentInput, applymentCourseUncheckedUpdateWithoutApplymentInput>
  }

  export type applymentCourseUpdateManyWithWhereWithoutApplymentInput = {
    where: applymentCourseScalarWhereInput
    data: XOR<applymentCourseUpdateManyMutationInput, applymentCourseUncheckedUpdateManyWithoutApplymentInput>
  }

  export type courseCreateWithoutApplymentCourseInput = {
    id?: string
    name: string
    vacancies: string
    schoolership: schoolershipCreateNestedOneWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutApplymentCourseInput = {
    id?: string
    name: string
    vacancies: string
    schoolership_id: string
  }

  export type courseCreateOrConnectWithoutApplymentCourseInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutApplymentCourseInput, courseUncheckedCreateWithoutApplymentCourseInput>
  }

  export type applymentCreateWithoutApplymentCourseInput = {
    id?: string
    number: string
    User: userCreateNestedOneWithoutApplyemntInput
  }

  export type applymentUncheckedCreateWithoutApplymentCourseInput = {
    id?: string
    number: string
    user_id: string
  }

  export type applymentCreateOrConnectWithoutApplymentCourseInput = {
    where: applymentWhereUniqueInput
    create: XOR<applymentCreateWithoutApplymentCourseInput, applymentUncheckedCreateWithoutApplymentCourseInput>
  }

  export type courseUpsertWithoutApplymentCourseInput = {
    update: XOR<courseUpdateWithoutApplymentCourseInput, courseUncheckedUpdateWithoutApplymentCourseInput>
    create: XOR<courseCreateWithoutApplymentCourseInput, courseUncheckedCreateWithoutApplymentCourseInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutApplymentCourseInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutApplymentCourseInput, courseUncheckedUpdateWithoutApplymentCourseInput>
  }

  export type courseUpdateWithoutApplymentCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    schoolership?: schoolershipUpdateOneRequiredWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutApplymentCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    schoolership_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentUpsertWithoutApplymentCourseInput = {
    update: XOR<applymentUpdateWithoutApplymentCourseInput, applymentUncheckedUpdateWithoutApplymentCourseInput>
    create: XOR<applymentCreateWithoutApplymentCourseInput, applymentUncheckedCreateWithoutApplymentCourseInput>
    where?: applymentWhereInput
  }

  export type applymentUpdateToOneWithWhereWithoutApplymentCourseInput = {
    where?: applymentWhereInput
    data: XOR<applymentUpdateWithoutApplymentCourseInput, applymentUncheckedUpdateWithoutApplymentCourseInput>
  }

  export type applymentUpdateWithoutApplymentCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    User?: userUpdateOneRequiredWithoutApplyemntNestedInput
  }

  export type applymentUncheckedUpdateWithoutApplymentCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCreateManyUserInput = {
    id?: string
    number: string
  }

  export type applymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUpdateManyWithoutApplymentNestedInput
  }

  export type applymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUncheckedUpdateManyWithoutApplymentNestedInput
  }

  export type applymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type courseCreateManySchoolershipInput = {
    id?: string
    name: string
    vacancies: string
  }

  export type courseUpdateWithoutSchoolershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutSchoolershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
    ApplymentCourse?: applymentCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutSchoolershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vacancies?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseCreateManyCourseInput = {
    id?: string
    applyment_id: string
  }

  export type applymentCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applyment?: applymentUpdateOneRequiredWithoutApplymentCourseNestedInput
  }

  export type applymentCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applyment_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applyment_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseCreateManyApplymentInput = {
    id?: string
    course_id: string
  }

  export type applymentCourseUpdateWithoutApplymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    Course?: courseUpdateOneRequiredWithoutApplymentCourseNestedInput
  }

  export type applymentCourseUncheckedUpdateWithoutApplymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type applymentCourseUncheckedUpdateManyWithoutApplymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}