
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
 * Model Adiso
 * 
 */
export type Adiso = $Result.DefaultSelection<Prisma.$AdisoPayload>
/**
 * Model Imagen
 * 
 */
export type Imagen = $Result.DefaultSelection<Prisma.$ImagenPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoAdiso: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  VENDIDO: 'VENDIDO',
  EXPIRADO: 'EXPIRADO'
};

export type EstadoAdiso = (typeof EstadoAdiso)[keyof typeof EstadoAdiso]

}

export type EstadoAdiso = $Enums.EstadoAdiso

export const EstadoAdiso: typeof $Enums.EstadoAdiso

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adisos
 * const adisos = await prisma.adiso.findMany()
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
   * // Fetch zero or more Adisos
   * const adisos = await prisma.adiso.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.adiso`: Exposes CRUD operations for the **Adiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adisos
    * const adisos = await prisma.adiso.findMany()
    * ```
    */
  get adiso(): Prisma.AdisoDelegate<ExtArgs>;

  /**
   * `prisma.imagen`: Exposes CRUD operations for the **Imagen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagens
    * const imagens = await prisma.imagen.findMany()
    * ```
    */
  get imagen(): Prisma.ImagenDelegate<ExtArgs>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Adiso: 'Adiso',
    Imagen: 'Imagen',
    Comentario: 'Comentario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    mongodb?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "adiso" | "imagen" | "comentario"
      txIsolationLevel: never
    }
    model: {
      Adiso: {
        payload: Prisma.$AdisoPayload<ExtArgs>
        fields: Prisma.AdisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          findFirst: {
            args: Prisma.AdisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          findMany: {
            args: Prisma.AdisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>[]
          }
          create: {
            args: Prisma.AdisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          createMany: {
            args: Prisma.AdisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          update: {
            args: Prisma.AdisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          deleteMany: {
            args: Prisma.AdisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdisoPayload>
          }
          aggregate: {
            args: Prisma.AdisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdiso>
          }
          groupBy: {
            args: Prisma.AdisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdisoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdisoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdisoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdisoCountArgs<ExtArgs>
            result: $Utils.Optional<AdisoCountAggregateOutputType> | number
          }
        }
      }
      Imagen: {
        payload: Prisma.$ImagenPayload<ExtArgs>
        fields: Prisma.ImagenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          findFirst: {
            args: Prisma.ImagenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          findMany: {
            args: Prisma.ImagenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>[]
          }
          create: {
            args: Prisma.ImagenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          createMany: {
            args: Prisma.ImagenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          update: {
            args: Prisma.ImagenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          deleteMany: {
            args: Prisma.ImagenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          aggregate: {
            args: Prisma.ImagenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagen>
          }
          groupBy: {
            args: Prisma.ImagenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ImagenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ImagenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ImagenCountArgs<ExtArgs>
            result: $Utils.Optional<ImagenCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ComentarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ComentarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Count Type AdisoCountOutputType
   */

  export type AdisoCountOutputType = {
    comentarios: number
    imagenes: number
  }

  export type AdisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | AdisoCountOutputTypeCountComentariosArgs
    imagenes?: boolean | AdisoCountOutputTypeCountImagenesArgs
  }

  // Custom InputTypes
  /**
   * AdisoCountOutputType without action
   */
  export type AdisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdisoCountOutputType
     */
    select?: AdisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdisoCountOutputType without action
   */
  export type AdisoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * AdisoCountOutputType without action
   */
  export type AdisoCountOutputTypeCountImagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Adiso
   */

  export type AggregateAdiso = {
    _count: AdisoCountAggregateOutputType | null
    _avg: AdisoAvgAggregateOutputType | null
    _sum: AdisoSumAggregateOutputType | null
    _min: AdisoMinAggregateOutputType | null
    _max: AdisoMaxAggregateOutputType | null
  }

  export type AdisoAvgAggregateOutputType = {
    categoriaId: number | null
    precio: number | null
    latitud: number | null
    longitud: number | null
    usuarioId: number | null
  }

  export type AdisoSumAggregateOutputType = {
    categoriaId: number | null
    precio: number | null
    latitud: number | null
    longitud: number | null
    usuarioId: number | null
  }

  export type AdisoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    categoriaId: number | null
    precio: number | null
    moneda: string | null
    contacto: string | null
    latitud: number | null
    longitud: number | null
    estado: $Enums.EstadoAdiso | null
    expiracion: Date | null
    creadoEn: Date | null
    usuarioId: number | null
  }

  export type AdisoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    categoriaId: number | null
    precio: number | null
    moneda: string | null
    contacto: string | null
    latitud: number | null
    longitud: number | null
    estado: $Enums.EstadoAdiso | null
    expiracion: Date | null
    creadoEn: Date | null
    usuarioId: number | null
  }

  export type AdisoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    categoriaId: number
    precio: number
    moneda: number
    contacto: number
    latitud: number
    longitud: number
    estado: number
    expiracion: number
    creadoEn: number
    usuarioId: number
    extra: number
    _all: number
  }


  export type AdisoAvgAggregateInputType = {
    categoriaId?: true
    precio?: true
    latitud?: true
    longitud?: true
    usuarioId?: true
  }

  export type AdisoSumAggregateInputType = {
    categoriaId?: true
    precio?: true
    latitud?: true
    longitud?: true
    usuarioId?: true
  }

  export type AdisoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoriaId?: true
    precio?: true
    moneda?: true
    contacto?: true
    latitud?: true
    longitud?: true
    estado?: true
    expiracion?: true
    creadoEn?: true
    usuarioId?: true
  }

  export type AdisoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoriaId?: true
    precio?: true
    moneda?: true
    contacto?: true
    latitud?: true
    longitud?: true
    estado?: true
    expiracion?: true
    creadoEn?: true
    usuarioId?: true
  }

  export type AdisoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    categoriaId?: true
    precio?: true
    moneda?: true
    contacto?: true
    latitud?: true
    longitud?: true
    estado?: true
    expiracion?: true
    creadoEn?: true
    usuarioId?: true
    extra?: true
    _all?: true
  }

  export type AdisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adiso to aggregate.
     */
    where?: AdisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adisos to fetch.
     */
    orderBy?: AdisoOrderByWithRelationInput | AdisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adisos
    **/
    _count?: true | AdisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdisoMaxAggregateInputType
  }

  export type GetAdisoAggregateType<T extends AdisoAggregateArgs> = {
        [P in keyof T & keyof AggregateAdiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdiso[P]>
      : GetScalarType<T[P], AggregateAdiso[P]>
  }




  export type AdisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdisoWhereInput
    orderBy?: AdisoOrderByWithAggregationInput | AdisoOrderByWithAggregationInput[]
    by: AdisoScalarFieldEnum[] | AdisoScalarFieldEnum
    having?: AdisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdisoCountAggregateInputType | true
    _avg?: AdisoAvgAggregateInputType
    _sum?: AdisoSumAggregateInputType
    _min?: AdisoMinAggregateInputType
    _max?: AdisoMaxAggregateInputType
  }

  export type AdisoGroupByOutputType = {
    id: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio: number | null
    moneda: string | null
    contacto: string
    latitud: number | null
    longitud: number | null
    estado: $Enums.EstadoAdiso
    expiracion: Date | null
    creadoEn: Date
    usuarioId: number
    extra: JsonValue | null
    _count: AdisoCountAggregateOutputType | null
    _avg: AdisoAvgAggregateOutputType | null
    _sum: AdisoSumAggregateOutputType | null
    _min: AdisoMinAggregateOutputType | null
    _max: AdisoMaxAggregateOutputType | null
  }

  type GetAdisoGroupByPayload<T extends AdisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdisoGroupByOutputType[P]>
            : GetScalarType<T[P], AdisoGroupByOutputType[P]>
        }
      >
    >


  export type AdisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoriaId?: boolean
    precio?: boolean
    moneda?: boolean
    contacto?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    expiracion?: boolean
    creadoEn?: boolean
    usuarioId?: boolean
    extra?: boolean
    comentarios?: boolean | Adiso$comentariosArgs<ExtArgs>
    imagenes?: boolean | Adiso$imagenesArgs<ExtArgs>
    _count?: boolean | AdisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adiso"]>


  export type AdisoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    categoriaId?: boolean
    precio?: boolean
    moneda?: boolean
    contacto?: boolean
    latitud?: boolean
    longitud?: boolean
    estado?: boolean
    expiracion?: boolean
    creadoEn?: boolean
    usuarioId?: boolean
    extra?: boolean
  }

  export type AdisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | Adiso$comentariosArgs<ExtArgs>
    imagenes?: boolean | Adiso$imagenesArgs<ExtArgs>
    _count?: boolean | AdisoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adiso"
    objects: {
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      imagenes: Prisma.$ImagenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descripcion: string
      categoriaId: number
      precio: number | null
      moneda: string | null
      contacto: string
      latitud: number | null
      longitud: number | null
      estado: $Enums.EstadoAdiso
      expiracion: Date | null
      creadoEn: Date
      usuarioId: number
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["adiso"]>
    composites: {}
  }

  type AdisoGetPayload<S extends boolean | null | undefined | AdisoDefaultArgs> = $Result.GetResult<Prisma.$AdisoPayload, S>

  type AdisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdisoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdisoCountAggregateInputType | true
    }

  export interface AdisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adiso'], meta: { name: 'Adiso' } }
    /**
     * Find zero or one Adiso that matches the filter.
     * @param {AdisoFindUniqueArgs} args - Arguments to find a Adiso
     * @example
     * // Get one Adiso
     * const adiso = await prisma.adiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdisoFindUniqueArgs>(args: SelectSubset<T, AdisoFindUniqueArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Adiso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdisoFindUniqueOrThrowArgs} args - Arguments to find a Adiso
     * @example
     * // Get one Adiso
     * const adiso = await prisma.adiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdisoFindUniqueOrThrowArgs>(args: SelectSubset<T, AdisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Adiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoFindFirstArgs} args - Arguments to find a Adiso
     * @example
     * // Get one Adiso
     * const adiso = await prisma.adiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdisoFindFirstArgs>(args?: SelectSubset<T, AdisoFindFirstArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Adiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoFindFirstOrThrowArgs} args - Arguments to find a Adiso
     * @example
     * // Get one Adiso
     * const adiso = await prisma.adiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdisoFindFirstOrThrowArgs>(args?: SelectSubset<T, AdisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Adisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adisos
     * const adisos = await prisma.adiso.findMany()
     * 
     * // Get first 10 Adisos
     * const adisos = await prisma.adiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adisoWithIdOnly = await prisma.adiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdisoFindManyArgs>(args?: SelectSubset<T, AdisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Adiso.
     * @param {AdisoCreateArgs} args - Arguments to create a Adiso.
     * @example
     * // Create one Adiso
     * const Adiso = await prisma.adiso.create({
     *   data: {
     *     // ... data to create a Adiso
     *   }
     * })
     * 
     */
    create<T extends AdisoCreateArgs>(args: SelectSubset<T, AdisoCreateArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Adisos.
     * @param {AdisoCreateManyArgs} args - Arguments to create many Adisos.
     * @example
     * // Create many Adisos
     * const adiso = await prisma.adiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdisoCreateManyArgs>(args?: SelectSubset<T, AdisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adiso.
     * @param {AdisoDeleteArgs} args - Arguments to delete one Adiso.
     * @example
     * // Delete one Adiso
     * const Adiso = await prisma.adiso.delete({
     *   where: {
     *     // ... filter to delete one Adiso
     *   }
     * })
     * 
     */
    delete<T extends AdisoDeleteArgs>(args: SelectSubset<T, AdisoDeleteArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Adiso.
     * @param {AdisoUpdateArgs} args - Arguments to update one Adiso.
     * @example
     * // Update one Adiso
     * const adiso = await prisma.adiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdisoUpdateArgs>(args: SelectSubset<T, AdisoUpdateArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Adisos.
     * @param {AdisoDeleteManyArgs} args - Arguments to filter Adisos to delete.
     * @example
     * // Delete a few Adisos
     * const { count } = await prisma.adiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdisoDeleteManyArgs>(args?: SelectSubset<T, AdisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adisos
     * const adiso = await prisma.adiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdisoUpdateManyArgs>(args: SelectSubset<T, AdisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adiso.
     * @param {AdisoUpsertArgs} args - Arguments to update or create a Adiso.
     * @example
     * // Update or create a Adiso
     * const adiso = await prisma.adiso.upsert({
     *   create: {
     *     // ... data to create a Adiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adiso we want to update
     *   }
     * })
     */
    upsert<T extends AdisoUpsertArgs>(args: SelectSubset<T, AdisoUpsertArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Adisos that matches the filter.
     * @param {AdisoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const adiso = await prisma.adiso.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AdisoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Adiso.
     * @param {AdisoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const adiso = await prisma.adiso.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdisoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Adisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoCountArgs} args - Arguments to filter Adisos to count.
     * @example
     * // Count the number of Adisos
     * const count = await prisma.adiso.count({
     *   where: {
     *     // ... the filter for the Adisos we want to count
     *   }
     * })
    **/
    count<T extends AdisoCountArgs>(
      args?: Subset<T, AdisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdisoAggregateArgs>(args: Subset<T, AdisoAggregateArgs>): Prisma.PrismaPromise<GetAdisoAggregateType<T>>

    /**
     * Group by Adiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdisoGroupByArgs} args - Group by arguments.
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
      T extends AdisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdisoGroupByArgs['orderBy'] }
        : { orderBy?: AdisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adiso model
   */
  readonly fields: AdisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comentarios<T extends Adiso$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Adiso$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany"> | Null>
    imagenes<T extends Adiso$imagenesArgs<ExtArgs> = {}>(args?: Subset<T, Adiso$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Adiso model
   */ 
  interface AdisoFieldRefs {
    readonly id: FieldRef<"Adiso", 'String'>
    readonly titulo: FieldRef<"Adiso", 'String'>
    readonly descripcion: FieldRef<"Adiso", 'String'>
    readonly categoriaId: FieldRef<"Adiso", 'Int'>
    readonly precio: FieldRef<"Adiso", 'Float'>
    readonly moneda: FieldRef<"Adiso", 'String'>
    readonly contacto: FieldRef<"Adiso", 'String'>
    readonly latitud: FieldRef<"Adiso", 'Float'>
    readonly longitud: FieldRef<"Adiso", 'Float'>
    readonly estado: FieldRef<"Adiso", 'EstadoAdiso'>
    readonly expiracion: FieldRef<"Adiso", 'DateTime'>
    readonly creadoEn: FieldRef<"Adiso", 'DateTime'>
    readonly usuarioId: FieldRef<"Adiso", 'Int'>
    readonly extra: FieldRef<"Adiso", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Adiso findUnique
   */
  export type AdisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter, which Adiso to fetch.
     */
    where: AdisoWhereUniqueInput
  }

  /**
   * Adiso findUniqueOrThrow
   */
  export type AdisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter, which Adiso to fetch.
     */
    where: AdisoWhereUniqueInput
  }

  /**
   * Adiso findFirst
   */
  export type AdisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter, which Adiso to fetch.
     */
    where?: AdisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adisos to fetch.
     */
    orderBy?: AdisoOrderByWithRelationInput | AdisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adisos.
     */
    cursor?: AdisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adisos.
     */
    distinct?: AdisoScalarFieldEnum | AdisoScalarFieldEnum[]
  }

  /**
   * Adiso findFirstOrThrow
   */
  export type AdisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter, which Adiso to fetch.
     */
    where?: AdisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adisos to fetch.
     */
    orderBy?: AdisoOrderByWithRelationInput | AdisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adisos.
     */
    cursor?: AdisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adisos.
     */
    distinct?: AdisoScalarFieldEnum | AdisoScalarFieldEnum[]
  }

  /**
   * Adiso findMany
   */
  export type AdisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter, which Adisos to fetch.
     */
    where?: AdisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adisos to fetch.
     */
    orderBy?: AdisoOrderByWithRelationInput | AdisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adisos.
     */
    cursor?: AdisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adisos.
     */
    skip?: number
    distinct?: AdisoScalarFieldEnum | AdisoScalarFieldEnum[]
  }

  /**
   * Adiso create
   */
  export type AdisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Adiso.
     */
    data: XOR<AdisoCreateInput, AdisoUncheckedCreateInput>
  }

  /**
   * Adiso createMany
   */
  export type AdisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adisos.
     */
    data: AdisoCreateManyInput | AdisoCreateManyInput[]
  }

  /**
   * Adiso update
   */
  export type AdisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Adiso.
     */
    data: XOR<AdisoUpdateInput, AdisoUncheckedUpdateInput>
    /**
     * Choose, which Adiso to update.
     */
    where: AdisoWhereUniqueInput
  }

  /**
   * Adiso updateMany
   */
  export type AdisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adisos.
     */
    data: XOR<AdisoUpdateManyMutationInput, AdisoUncheckedUpdateManyInput>
    /**
     * Filter which Adisos to update
     */
    where?: AdisoWhereInput
  }

  /**
   * Adiso upsert
   */
  export type AdisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Adiso to update in case it exists.
     */
    where: AdisoWhereUniqueInput
    /**
     * In case the Adiso found by the `where` argument doesn't exist, create a new Adiso with this data.
     */
    create: XOR<AdisoCreateInput, AdisoUncheckedCreateInput>
    /**
     * In case the Adiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdisoUpdateInput, AdisoUncheckedUpdateInput>
  }

  /**
   * Adiso delete
   */
  export type AdisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
    /**
     * Filter which Adiso to delete.
     */
    where: AdisoWhereUniqueInput
  }

  /**
   * Adiso deleteMany
   */
  export type AdisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adisos to delete
     */
    where?: AdisoWhereInput
  }

  /**
   * Adiso findRaw
   */
  export type AdisoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Adiso aggregateRaw
   */
  export type AdisoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Adiso.comentarios
   */
  export type Adiso$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Adiso.imagenes
   */
  export type Adiso$imagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    where?: ImagenWhereInput
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    cursor?: ImagenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Adiso without action
   */
  export type AdisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adiso
     */
    select?: AdisoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdisoInclude<ExtArgs> | null
  }


  /**
   * Model Imagen
   */

  export type AggregateImagen = {
    _count: ImagenCountAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  export type ImagenMinAggregateOutputType = {
    id: string | null
    url: string | null
    adisoId: string | null
  }

  export type ImagenMaxAggregateOutputType = {
    id: string | null
    url: string | null
    adisoId: string | null
  }

  export type ImagenCountAggregateOutputType = {
    id: number
    url: number
    adisoId: number
    _all: number
  }


  export type ImagenMinAggregateInputType = {
    id?: true
    url?: true
    adisoId?: true
  }

  export type ImagenMaxAggregateInputType = {
    id?: true
    url?: true
    adisoId?: true
  }

  export type ImagenCountAggregateInputType = {
    id?: true
    url?: true
    adisoId?: true
    _all?: true
  }

  export type ImagenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagen to aggregate.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagens
    **/
    _count?: true | ImagenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagenMaxAggregateInputType
  }

  export type GetImagenAggregateType<T extends ImagenAggregateArgs> = {
        [P in keyof T & keyof AggregateImagen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagen[P]>
      : GetScalarType<T[P], AggregateImagen[P]>
  }




  export type ImagenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenWhereInput
    orderBy?: ImagenOrderByWithAggregationInput | ImagenOrderByWithAggregationInput[]
    by: ImagenScalarFieldEnum[] | ImagenScalarFieldEnum
    having?: ImagenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagenCountAggregateInputType | true
    _min?: ImagenMinAggregateInputType
    _max?: ImagenMaxAggregateInputType
  }

  export type ImagenGroupByOutputType = {
    id: string
    url: string
    adisoId: string
    _count: ImagenCountAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  type GetImagenGroupByPayload<T extends ImagenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagenGroupByOutputType[P]>
            : GetScalarType<T[P], ImagenGroupByOutputType[P]>
        }
      >
    >


  export type ImagenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    adisoId?: boolean
    adiso?: boolean | AdisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>


  export type ImagenSelectScalar = {
    id?: boolean
    url?: boolean
    adisoId?: boolean
  }

  export type ImagenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adiso?: boolean | AdisoDefaultArgs<ExtArgs>
  }

  export type $ImagenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagen"
    objects: {
      adiso: Prisma.$AdisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      adisoId: string
    }, ExtArgs["result"]["imagen"]>
    composites: {}
  }

  type ImagenGetPayload<S extends boolean | null | undefined | ImagenDefaultArgs> = $Result.GetResult<Prisma.$ImagenPayload, S>

  type ImagenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImagenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagenCountAggregateInputType | true
    }

  export interface ImagenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagen'], meta: { name: 'Imagen' } }
    /**
     * Find zero or one Imagen that matches the filter.
     * @param {ImagenFindUniqueArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagenFindUniqueArgs>(args: SelectSubset<T, ImagenFindUniqueArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Imagen that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImagenFindUniqueOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagenFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Imagen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindFirstArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagenFindFirstArgs>(args?: SelectSubset<T, ImagenFindFirstArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Imagen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindFirstOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagenFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Imagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagens
     * const imagens = await prisma.imagen.findMany()
     * 
     * // Get first 10 Imagens
     * const imagens = await prisma.imagen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagenWithIdOnly = await prisma.imagen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagenFindManyArgs>(args?: SelectSubset<T, ImagenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Imagen.
     * @param {ImagenCreateArgs} args - Arguments to create a Imagen.
     * @example
     * // Create one Imagen
     * const Imagen = await prisma.imagen.create({
     *   data: {
     *     // ... data to create a Imagen
     *   }
     * })
     * 
     */
    create<T extends ImagenCreateArgs>(args: SelectSubset<T, ImagenCreateArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Imagens.
     * @param {ImagenCreateManyArgs} args - Arguments to create many Imagens.
     * @example
     * // Create many Imagens
     * const imagen = await prisma.imagen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagenCreateManyArgs>(args?: SelectSubset<T, ImagenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imagen.
     * @param {ImagenDeleteArgs} args - Arguments to delete one Imagen.
     * @example
     * // Delete one Imagen
     * const Imagen = await prisma.imagen.delete({
     *   where: {
     *     // ... filter to delete one Imagen
     *   }
     * })
     * 
     */
    delete<T extends ImagenDeleteArgs>(args: SelectSubset<T, ImagenDeleteArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Imagen.
     * @param {ImagenUpdateArgs} args - Arguments to update one Imagen.
     * @example
     * // Update one Imagen
     * const imagen = await prisma.imagen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagenUpdateArgs>(args: SelectSubset<T, ImagenUpdateArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Imagens.
     * @param {ImagenDeleteManyArgs} args - Arguments to filter Imagens to delete.
     * @example
     * // Delete a few Imagens
     * const { count } = await prisma.imagen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagenDeleteManyArgs>(args?: SelectSubset<T, ImagenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagens
     * const imagen = await prisma.imagen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagenUpdateManyArgs>(args: SelectSubset<T, ImagenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imagen.
     * @param {ImagenUpsertArgs} args - Arguments to update or create a Imagen.
     * @example
     * // Update or create a Imagen
     * const imagen = await prisma.imagen.upsert({
     *   create: {
     *     // ... data to create a Imagen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagen we want to update
     *   }
     * })
     */
    upsert<T extends ImagenUpsertArgs>(args: SelectSubset<T, ImagenUpsertArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Imagens that matches the filter.
     * @param {ImagenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const imagen = await prisma.imagen.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ImagenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Imagen.
     * @param {ImagenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const imagen = await prisma.imagen.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ImagenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenCountArgs} args - Arguments to filter Imagens to count.
     * @example
     * // Count the number of Imagens
     * const count = await prisma.imagen.count({
     *   where: {
     *     // ... the filter for the Imagens we want to count
     *   }
     * })
    **/
    count<T extends ImagenCountArgs>(
      args?: Subset<T, ImagenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagenAggregateArgs>(args: Subset<T, ImagenAggregateArgs>): Prisma.PrismaPromise<GetImagenAggregateType<T>>

    /**
     * Group by Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenGroupByArgs} args - Group by arguments.
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
      T extends ImagenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagenGroupByArgs['orderBy'] }
        : { orderBy?: ImagenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagen model
   */
  readonly fields: ImagenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adiso<T extends AdisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdisoDefaultArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Imagen model
   */ 
  interface ImagenFieldRefs {
    readonly id: FieldRef<"Imagen", 'String'>
    readonly url: FieldRef<"Imagen", 'String'>
    readonly adisoId: FieldRef<"Imagen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imagen findUnique
   */
  export type ImagenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen findUniqueOrThrow
   */
  export type ImagenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen findFirst
   */
  export type ImagenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen findFirstOrThrow
   */
  export type ImagenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen findMany
   */
  export type ImagenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagens to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen create
   */
  export type ImagenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The data needed to create a Imagen.
     */
    data: XOR<ImagenCreateInput, ImagenUncheckedCreateInput>
  }

  /**
   * Imagen createMany
   */
  export type ImagenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagens.
     */
    data: ImagenCreateManyInput | ImagenCreateManyInput[]
  }

  /**
   * Imagen update
   */
  export type ImagenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The data needed to update a Imagen.
     */
    data: XOR<ImagenUpdateInput, ImagenUncheckedUpdateInput>
    /**
     * Choose, which Imagen to update.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen updateMany
   */
  export type ImagenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagens.
     */
    data: XOR<ImagenUpdateManyMutationInput, ImagenUncheckedUpdateManyInput>
    /**
     * Filter which Imagens to update
     */
    where?: ImagenWhereInput
  }

  /**
   * Imagen upsert
   */
  export type ImagenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The filter to search for the Imagen to update in case it exists.
     */
    where: ImagenWhereUniqueInput
    /**
     * In case the Imagen found by the `where` argument doesn't exist, create a new Imagen with this data.
     */
    create: XOR<ImagenCreateInput, ImagenUncheckedCreateInput>
    /**
     * In case the Imagen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagenUpdateInput, ImagenUncheckedUpdateInput>
  }

  /**
   * Imagen delete
   */
  export type ImagenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter which Imagen to delete.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen deleteMany
   */
  export type ImagenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagens to delete
     */
    where?: ImagenWhereInput
  }

  /**
   * Imagen findRaw
   */
  export type ImagenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Imagen aggregateRaw
   */
  export type ImagenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Imagen without action
   */
  export type ImagenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    calificacion: number | null
    usuarioId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    calificacion: number | null
    usuarioId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: string | null
    contenido: string | null
    calificacion: number | null
    creadoEn: Date | null
    usuarioId: number | null
    adisoId: string | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: string | null
    contenido: string | null
    calificacion: number | null
    creadoEn: Date | null
    usuarioId: number | null
    adisoId: string | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    contenido: number
    calificacion: number
    creadoEn: number
    usuarioId: number
    adisoId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    calificacion?: true
    usuarioId?: true
  }

  export type ComentarioSumAggregateInputType = {
    calificacion?: true
    usuarioId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    contenido?: true
    calificacion?: true
    creadoEn?: true
    usuarioId?: true
    adisoId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    contenido?: true
    calificacion?: true
    creadoEn?: true
    usuarioId?: true
    adisoId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    contenido?: true
    calificacion?: true
    creadoEn?: true
    usuarioId?: true
    adisoId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: string
    contenido: string
    calificacion: number | null
    creadoEn: Date
    usuarioId: number
    adisoId: string
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    calificacion?: boolean
    creadoEn?: boolean
    usuarioId?: boolean
    adisoId?: boolean
    adiso?: boolean | AdisoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>


  export type ComentarioSelectScalar = {
    id?: boolean
    contenido?: boolean
    calificacion?: boolean
    creadoEn?: boolean
    usuarioId?: boolean
    adisoId?: boolean
  }

  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adiso?: boolean | AdisoDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      adiso: Prisma.$AdisoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenido: string
      calificacion: number | null
      creadoEn: Date
      usuarioId: number
      adisoId: string
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Comentarios that matches the filter.
     * @param {ComentarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comentario = await prisma.comentario.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ComentarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comentario.
     * @param {ComentarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comentario = await prisma.comentario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ComentarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
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
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adiso<T extends AdisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdisoDefaultArgs<ExtArgs>>): Prisma__AdisoClient<$Result.GetResult<Prisma.$AdisoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Comentario model
   */ 
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'String'>
    readonly contenido: FieldRef<"Comentario", 'String'>
    readonly calificacion: FieldRef<"Comentario", 'Int'>
    readonly creadoEn: FieldRef<"Comentario", 'DateTime'>
    readonly usuarioId: FieldRef<"Comentario", 'Int'>
    readonly adisoId: FieldRef<"Comentario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
  }

  /**
   * Comentario findRaw
   */
  export type ComentarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comentario aggregateRaw
   */
  export type ComentarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AdisoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    categoriaId: 'categoriaId',
    precio: 'precio',
    moneda: 'moneda',
    contacto: 'contacto',
    latitud: 'latitud',
    longitud: 'longitud',
    estado: 'estado',
    expiracion: 'expiracion',
    creadoEn: 'creadoEn',
    usuarioId: 'usuarioId',
    extra: 'extra'
  };

  export type AdisoScalarFieldEnum = (typeof AdisoScalarFieldEnum)[keyof typeof AdisoScalarFieldEnum]


  export const ImagenScalarFieldEnum: {
    id: 'id',
    url: 'url',
    adisoId: 'adisoId'
  };

  export type ImagenScalarFieldEnum = (typeof ImagenScalarFieldEnum)[keyof typeof ImagenScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    calificacion: 'calificacion',
    creadoEn: 'creadoEn',
    usuarioId: 'usuarioId',
    adisoId: 'adisoId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EstadoAdiso'
   */
  export type EnumEstadoAdisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAdiso'>
    


  /**
   * Reference to a field of type 'EstadoAdiso[]'
   */
  export type ListEnumEstadoAdisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoAdiso[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type AdisoWhereInput = {
    AND?: AdisoWhereInput | AdisoWhereInput[]
    OR?: AdisoWhereInput[]
    NOT?: AdisoWhereInput | AdisoWhereInput[]
    id?: StringFilter<"Adiso"> | string
    titulo?: StringFilter<"Adiso"> | string
    descripcion?: StringFilter<"Adiso"> | string
    categoriaId?: IntFilter<"Adiso"> | number
    precio?: FloatNullableFilter<"Adiso"> | number | null
    moneda?: StringNullableFilter<"Adiso"> | string | null
    contacto?: StringFilter<"Adiso"> | string
    latitud?: FloatNullableFilter<"Adiso"> | number | null
    longitud?: FloatNullableFilter<"Adiso"> | number | null
    estado?: EnumEstadoAdisoFilter<"Adiso"> | $Enums.EstadoAdiso
    expiracion?: DateTimeNullableFilter<"Adiso"> | Date | string | null
    creadoEn?: DateTimeFilter<"Adiso"> | Date | string
    usuarioId?: IntFilter<"Adiso"> | number
    extra?: JsonNullableFilter<"Adiso">
    comentarios?: ComentarioListRelationFilter
    imagenes?: ImagenListRelationFilter
  }

  export type AdisoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    moneda?: SortOrder
    contacto?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    expiracion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    extra?: SortOrder
    comentarios?: ComentarioOrderByRelationAggregateInput
    imagenes?: ImagenOrderByRelationAggregateInput
  }

  export type AdisoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdisoWhereInput | AdisoWhereInput[]
    OR?: AdisoWhereInput[]
    NOT?: AdisoWhereInput | AdisoWhereInput[]
    titulo?: StringFilter<"Adiso"> | string
    descripcion?: StringFilter<"Adiso"> | string
    categoriaId?: IntFilter<"Adiso"> | number
    precio?: FloatNullableFilter<"Adiso"> | number | null
    moneda?: StringNullableFilter<"Adiso"> | string | null
    contacto?: StringFilter<"Adiso"> | string
    latitud?: FloatNullableFilter<"Adiso"> | number | null
    longitud?: FloatNullableFilter<"Adiso"> | number | null
    estado?: EnumEstadoAdisoFilter<"Adiso"> | $Enums.EstadoAdiso
    expiracion?: DateTimeNullableFilter<"Adiso"> | Date | string | null
    creadoEn?: DateTimeFilter<"Adiso"> | Date | string
    usuarioId?: IntFilter<"Adiso"> | number
    extra?: JsonNullableFilter<"Adiso">
    comentarios?: ComentarioListRelationFilter
    imagenes?: ImagenListRelationFilter
  }, "id">

  export type AdisoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    moneda?: SortOrder
    contacto?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    expiracion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    extra?: SortOrder
    _count?: AdisoCountOrderByAggregateInput
    _avg?: AdisoAvgOrderByAggregateInput
    _max?: AdisoMaxOrderByAggregateInput
    _min?: AdisoMinOrderByAggregateInput
    _sum?: AdisoSumOrderByAggregateInput
  }

  export type AdisoScalarWhereWithAggregatesInput = {
    AND?: AdisoScalarWhereWithAggregatesInput | AdisoScalarWhereWithAggregatesInput[]
    OR?: AdisoScalarWhereWithAggregatesInput[]
    NOT?: AdisoScalarWhereWithAggregatesInput | AdisoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adiso"> | string
    titulo?: StringWithAggregatesFilter<"Adiso"> | string
    descripcion?: StringWithAggregatesFilter<"Adiso"> | string
    categoriaId?: IntWithAggregatesFilter<"Adiso"> | number
    precio?: FloatNullableWithAggregatesFilter<"Adiso"> | number | null
    moneda?: StringNullableWithAggregatesFilter<"Adiso"> | string | null
    contacto?: StringWithAggregatesFilter<"Adiso"> | string
    latitud?: FloatNullableWithAggregatesFilter<"Adiso"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"Adiso"> | number | null
    estado?: EnumEstadoAdisoWithAggregatesFilter<"Adiso"> | $Enums.EstadoAdiso
    expiracion?: DateTimeNullableWithAggregatesFilter<"Adiso"> | Date | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Adiso"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Adiso"> | number
    extra?: JsonNullableWithAggregatesFilter<"Adiso">
  }

  export type ImagenWhereInput = {
    AND?: ImagenWhereInput | ImagenWhereInput[]
    OR?: ImagenWhereInput[]
    NOT?: ImagenWhereInput | ImagenWhereInput[]
    id?: StringFilter<"Imagen"> | string
    url?: StringFilter<"Imagen"> | string
    adisoId?: StringFilter<"Imagen"> | string
    adiso?: XOR<AdisoScalarRelationFilter, AdisoWhereInput>
  }

  export type ImagenOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    adisoId?: SortOrder
    adiso?: AdisoOrderByWithRelationInput
  }

  export type ImagenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagenWhereInput | ImagenWhereInput[]
    OR?: ImagenWhereInput[]
    NOT?: ImagenWhereInput | ImagenWhereInput[]
    url?: StringFilter<"Imagen"> | string
    adisoId?: StringFilter<"Imagen"> | string
    adiso?: XOR<AdisoScalarRelationFilter, AdisoWhereInput>
  }, "id">

  export type ImagenOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    adisoId?: SortOrder
    _count?: ImagenCountOrderByAggregateInput
    _max?: ImagenMaxOrderByAggregateInput
    _min?: ImagenMinOrderByAggregateInput
  }

  export type ImagenScalarWhereWithAggregatesInput = {
    AND?: ImagenScalarWhereWithAggregatesInput | ImagenScalarWhereWithAggregatesInput[]
    OR?: ImagenScalarWhereWithAggregatesInput[]
    NOT?: ImagenScalarWhereWithAggregatesInput | ImagenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Imagen"> | string
    url?: StringWithAggregatesFilter<"Imagen"> | string
    adisoId?: StringWithAggregatesFilter<"Imagen"> | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: StringFilter<"Comentario"> | string
    contenido?: StringFilter<"Comentario"> | string
    calificacion?: IntNullableFilter<"Comentario"> | number | null
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
    usuarioId?: IntFilter<"Comentario"> | number
    adisoId?: StringFilter<"Comentario"> | string
    adiso?: XOR<AdisoScalarRelationFilter, AdisoWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    adisoId?: SortOrder
    adiso?: AdisoOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    contenido?: StringFilter<"Comentario"> | string
    calificacion?: IntNullableFilter<"Comentario"> | number | null
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
    usuarioId?: IntFilter<"Comentario"> | number
    adisoId?: StringFilter<"Comentario"> | string
    adiso?: XOR<AdisoScalarRelationFilter, AdisoWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    adisoId?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comentario"> | string
    contenido?: StringWithAggregatesFilter<"Comentario"> | string
    calificacion?: IntNullableWithAggregatesFilter<"Comentario"> | number | null
    creadoEn?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Comentario"> | number
    adisoId?: StringWithAggregatesFilter<"Comentario"> | string
  }

  export type AdisoCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    comentarios?: ComentarioCreateNestedManyWithoutAdisoInput
    imagenes?: ImagenCreateNestedManyWithoutAdisoInput
  }

  export type AdisoUncheckedCreateInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAdisoInput
    imagenes?: ImagenUncheckedCreateNestedManyWithoutAdisoInput
  }

  export type AdisoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    comentarios?: ComentarioUpdateManyWithoutAdisoNestedInput
    imagenes?: ImagenUpdateManyWithoutAdisoNestedInput
  }

  export type AdisoUncheckedUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutAdisoNestedInput
    imagenes?: ImagenUncheckedUpdateManyWithoutAdisoNestedInput
  }

  export type AdisoCreateManyInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
  }

  export type AdisoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
  }

  export type AdisoUncheckedUpdateManyInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
  }

  export type ImagenCreateInput = {
    id?: string
    url: string
    adiso: AdisoCreateNestedOneWithoutImagenesInput
  }

  export type ImagenUncheckedCreateInput = {
    id?: string
    url: string
    adisoId: string
  }

  export type ImagenUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    adiso?: AdisoUpdateOneRequiredWithoutImagenesNestedInput
  }

  export type ImagenUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    adisoId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenCreateManyInput = {
    id?: string
    url: string
    adisoId: string
  }

  export type ImagenUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    adisoId?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioCreateInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
    adiso: AdisoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
    adisoId: string
  }

  export type ComentarioUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    adiso?: AdisoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    adisoId?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioCreateManyInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
    adisoId: string
  }

  export type ComentarioUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    adisoId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumEstadoAdisoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAdiso | EnumEstadoAdisoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAdisoFilter<$PrismaModel> | $Enums.EstadoAdiso
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type ImagenListRelationFilter = {
    every?: ImagenWhereInput
    some?: ImagenWhereInput
    none?: ImagenWhereInput
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdisoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    moneda?: SortOrder
    contacto?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    expiracion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    extra?: SortOrder
  }

  export type AdisoAvgOrderByAggregateInput = {
    categoriaId?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    usuarioId?: SortOrder
  }

  export type AdisoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    moneda?: SortOrder
    contacto?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    expiracion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
  }

  export type AdisoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    moneda?: SortOrder
    contacto?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    estado?: SortOrder
    expiracion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
  }

  export type AdisoSumOrderByAggregateInput = {
    categoriaId?: SortOrder
    precio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumEstadoAdisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAdiso | EnumEstadoAdisoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAdisoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAdiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAdisoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAdisoFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AdisoScalarRelationFilter = {
    is?: AdisoWhereInput
    isNot?: AdisoWhereInput
  }

  export type ImagenCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adisoId?: SortOrder
  }

  export type ImagenMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adisoId?: SortOrder
  }

  export type ImagenMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    adisoId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    adisoId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    calificacion?: SortOrder
    usuarioId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    adisoId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    calificacion?: SortOrder
    creadoEn?: SortOrder
    usuarioId?: SortOrder
    adisoId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    calificacion?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ComentarioCreateNestedManyWithoutAdisoInput = {
    create?: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput> | ComentarioCreateWithoutAdisoInput[] | ComentarioUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAdisoInput | ComentarioCreateOrConnectWithoutAdisoInput[]
    createMany?: ComentarioCreateManyAdisoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ImagenCreateNestedManyWithoutAdisoInput = {
    create?: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput> | ImagenCreateWithoutAdisoInput[] | ImagenUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutAdisoInput | ImagenCreateOrConnectWithoutAdisoInput[]
    createMany?: ImagenCreateManyAdisoInputEnvelope
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAdisoInput = {
    create?: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput> | ComentarioCreateWithoutAdisoInput[] | ComentarioUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAdisoInput | ComentarioCreateOrConnectWithoutAdisoInput[]
    createMany?: ComentarioCreateManyAdisoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ImagenUncheckedCreateNestedManyWithoutAdisoInput = {
    create?: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput> | ImagenCreateWithoutAdisoInput[] | ImagenUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutAdisoInput | ImagenCreateOrConnectWithoutAdisoInput[]
    createMany?: ImagenCreateManyAdisoInputEnvelope
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumEstadoAdisoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAdiso
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ComentarioUpdateManyWithoutAdisoNestedInput = {
    create?: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput> | ComentarioCreateWithoutAdisoInput[] | ComentarioUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAdisoInput | ComentarioCreateOrConnectWithoutAdisoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAdisoInput | ComentarioUpsertWithWhereUniqueWithoutAdisoInput[]
    createMany?: ComentarioCreateManyAdisoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAdisoInput | ComentarioUpdateWithWhereUniqueWithoutAdisoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAdisoInput | ComentarioUpdateManyWithWhereWithoutAdisoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ImagenUpdateManyWithoutAdisoNestedInput = {
    create?: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput> | ImagenCreateWithoutAdisoInput[] | ImagenUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutAdisoInput | ImagenCreateOrConnectWithoutAdisoInput[]
    upsert?: ImagenUpsertWithWhereUniqueWithoutAdisoInput | ImagenUpsertWithWhereUniqueWithoutAdisoInput[]
    createMany?: ImagenCreateManyAdisoInputEnvelope
    set?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    disconnect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    delete?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    update?: ImagenUpdateWithWhereUniqueWithoutAdisoInput | ImagenUpdateWithWhereUniqueWithoutAdisoInput[]
    updateMany?: ImagenUpdateManyWithWhereWithoutAdisoInput | ImagenUpdateManyWithWhereWithoutAdisoInput[]
    deleteMany?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAdisoNestedInput = {
    create?: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput> | ComentarioCreateWithoutAdisoInput[] | ComentarioUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAdisoInput | ComentarioCreateOrConnectWithoutAdisoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAdisoInput | ComentarioUpsertWithWhereUniqueWithoutAdisoInput[]
    createMany?: ComentarioCreateManyAdisoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAdisoInput | ComentarioUpdateWithWhereUniqueWithoutAdisoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAdisoInput | ComentarioUpdateManyWithWhereWithoutAdisoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ImagenUncheckedUpdateManyWithoutAdisoNestedInput = {
    create?: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput> | ImagenCreateWithoutAdisoInput[] | ImagenUncheckedCreateWithoutAdisoInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutAdisoInput | ImagenCreateOrConnectWithoutAdisoInput[]
    upsert?: ImagenUpsertWithWhereUniqueWithoutAdisoInput | ImagenUpsertWithWhereUniqueWithoutAdisoInput[]
    createMany?: ImagenCreateManyAdisoInputEnvelope
    set?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    disconnect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    delete?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    update?: ImagenUpdateWithWhereUniqueWithoutAdisoInput | ImagenUpdateWithWhereUniqueWithoutAdisoInput[]
    updateMany?: ImagenUpdateManyWithWhereWithoutAdisoInput | ImagenUpdateManyWithWhereWithoutAdisoInput[]
    deleteMany?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
  }

  export type AdisoCreateNestedOneWithoutImagenesInput = {
    create?: XOR<AdisoCreateWithoutImagenesInput, AdisoUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: AdisoCreateOrConnectWithoutImagenesInput
    connect?: AdisoWhereUniqueInput
  }

  export type AdisoUpdateOneRequiredWithoutImagenesNestedInput = {
    create?: XOR<AdisoCreateWithoutImagenesInput, AdisoUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: AdisoCreateOrConnectWithoutImagenesInput
    upsert?: AdisoUpsertWithoutImagenesInput
    connect?: AdisoWhereUniqueInput
    update?: XOR<XOR<AdisoUpdateToOneWithWhereWithoutImagenesInput, AdisoUpdateWithoutImagenesInput>, AdisoUncheckedUpdateWithoutImagenesInput>
  }

  export type AdisoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<AdisoCreateWithoutComentariosInput, AdisoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AdisoCreateOrConnectWithoutComentariosInput
    connect?: AdisoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type AdisoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<AdisoCreateWithoutComentariosInput, AdisoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: AdisoCreateOrConnectWithoutComentariosInput
    upsert?: AdisoUpsertWithoutComentariosInput
    connect?: AdisoWhereUniqueInput
    update?: XOR<XOR<AdisoUpdateToOneWithWhereWithoutComentariosInput, AdisoUpdateWithoutComentariosInput>, AdisoUncheckedUpdateWithoutComentariosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumEstadoAdisoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAdiso | EnumEstadoAdisoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAdisoFilter<$PrismaModel> | $Enums.EstadoAdiso
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumEstadoAdisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoAdiso | EnumEstadoAdisoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoAdiso[] | ListEnumEstadoAdisoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoAdisoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoAdiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoAdisoFilter<$PrismaModel>
    _max?: NestedEnumEstadoAdisoFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ComentarioCreateWithoutAdisoInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
  }

  export type ComentarioUncheckedCreateWithoutAdisoInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
  }

  export type ComentarioCreateOrConnectWithoutAdisoInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput>
  }

  export type ComentarioCreateManyAdisoInputEnvelope = {
    data: ComentarioCreateManyAdisoInput | ComentarioCreateManyAdisoInput[]
  }

  export type ImagenCreateWithoutAdisoInput = {
    id?: string
    url: string
  }

  export type ImagenUncheckedCreateWithoutAdisoInput = {
    id?: string
    url: string
  }

  export type ImagenCreateOrConnectWithoutAdisoInput = {
    where: ImagenWhereUniqueInput
    create: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput>
  }

  export type ImagenCreateManyAdisoInputEnvelope = {
    data: ImagenCreateManyAdisoInput | ImagenCreateManyAdisoInput[]
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAdisoInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAdisoInput, ComentarioUncheckedUpdateWithoutAdisoInput>
    create: XOR<ComentarioCreateWithoutAdisoInput, ComentarioUncheckedCreateWithoutAdisoInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAdisoInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAdisoInput, ComentarioUncheckedUpdateWithoutAdisoInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAdisoInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAdisoInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: StringFilter<"Comentario"> | string
    contenido?: StringFilter<"Comentario"> | string
    calificacion?: IntNullableFilter<"Comentario"> | number | null
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
    usuarioId?: IntFilter<"Comentario"> | number
    adisoId?: StringFilter<"Comentario"> | string
  }

  export type ImagenUpsertWithWhereUniqueWithoutAdisoInput = {
    where: ImagenWhereUniqueInput
    update: XOR<ImagenUpdateWithoutAdisoInput, ImagenUncheckedUpdateWithoutAdisoInput>
    create: XOR<ImagenCreateWithoutAdisoInput, ImagenUncheckedCreateWithoutAdisoInput>
  }

  export type ImagenUpdateWithWhereUniqueWithoutAdisoInput = {
    where: ImagenWhereUniqueInput
    data: XOR<ImagenUpdateWithoutAdisoInput, ImagenUncheckedUpdateWithoutAdisoInput>
  }

  export type ImagenUpdateManyWithWhereWithoutAdisoInput = {
    where: ImagenScalarWhereInput
    data: XOR<ImagenUpdateManyMutationInput, ImagenUncheckedUpdateManyWithoutAdisoInput>
  }

  export type ImagenScalarWhereInput = {
    AND?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
    OR?: ImagenScalarWhereInput[]
    NOT?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
    id?: StringFilter<"Imagen"> | string
    url?: StringFilter<"Imagen"> | string
    adisoId?: StringFilter<"Imagen"> | string
  }

  export type AdisoCreateWithoutImagenesInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    comentarios?: ComentarioCreateNestedManyWithoutAdisoInput
  }

  export type AdisoUncheckedCreateWithoutImagenesInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAdisoInput
  }

  export type AdisoCreateOrConnectWithoutImagenesInput = {
    where: AdisoWhereUniqueInput
    create: XOR<AdisoCreateWithoutImagenesInput, AdisoUncheckedCreateWithoutImagenesInput>
  }

  export type AdisoUpsertWithoutImagenesInput = {
    update: XOR<AdisoUpdateWithoutImagenesInput, AdisoUncheckedUpdateWithoutImagenesInput>
    create: XOR<AdisoCreateWithoutImagenesInput, AdisoUncheckedCreateWithoutImagenesInput>
    where?: AdisoWhereInput
  }

  export type AdisoUpdateToOneWithWhereWithoutImagenesInput = {
    where?: AdisoWhereInput
    data: XOR<AdisoUpdateWithoutImagenesInput, AdisoUncheckedUpdateWithoutImagenesInput>
  }

  export type AdisoUpdateWithoutImagenesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    comentarios?: ComentarioUpdateManyWithoutAdisoNestedInput
  }

  export type AdisoUncheckedUpdateWithoutImagenesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutAdisoNestedInput
  }

  export type AdisoCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    imagenes?: ImagenCreateNestedManyWithoutAdisoInput
  }

  export type AdisoUncheckedCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    descripcion: string
    categoriaId: number
    precio?: number | null
    moneda?: string | null
    contacto: string
    latitud?: number | null
    longitud?: number | null
    estado: $Enums.EstadoAdiso
    expiracion?: Date | string | null
    creadoEn?: Date | string
    usuarioId: number
    extra?: InputJsonValue | null
    imagenes?: ImagenUncheckedCreateNestedManyWithoutAdisoInput
  }

  export type AdisoCreateOrConnectWithoutComentariosInput = {
    where: AdisoWhereUniqueInput
    create: XOR<AdisoCreateWithoutComentariosInput, AdisoUncheckedCreateWithoutComentariosInput>
  }

  export type AdisoUpsertWithoutComentariosInput = {
    update: XOR<AdisoUpdateWithoutComentariosInput, AdisoUncheckedUpdateWithoutComentariosInput>
    create: XOR<AdisoCreateWithoutComentariosInput, AdisoUncheckedCreateWithoutComentariosInput>
    where?: AdisoWhereInput
  }

  export type AdisoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: AdisoWhereInput
    data: XOR<AdisoUpdateWithoutComentariosInput, AdisoUncheckedUpdateWithoutComentariosInput>
  }

  export type AdisoUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    imagenes?: ImagenUpdateManyWithoutAdisoNestedInput
  }

  export type AdisoUncheckedUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: StringFieldUpdateOperationsInput | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoAdisoFieldUpdateOperationsInput | $Enums.EstadoAdiso
    expiracion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    extra?: InputJsonValue | InputJsonValue | null
    imagenes?: ImagenUncheckedUpdateManyWithoutAdisoNestedInput
  }

  export type ComentarioCreateManyAdisoInput = {
    id?: string
    contenido: string
    calificacion?: number | null
    creadoEn?: Date | string
    usuarioId: number
  }

  export type ImagenCreateManyAdisoInput = {
    id?: string
    url: string
  }

  export type ComentarioUpdateWithoutAdisoInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateWithoutAdisoInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutAdisoInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    calificacion?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagenUpdateWithoutAdisoInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenUncheckedUpdateWithoutAdisoInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenUncheckedUpdateManyWithoutAdisoInput = {
    url?: StringFieldUpdateOperationsInput | string
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