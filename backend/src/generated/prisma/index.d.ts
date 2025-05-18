
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
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Filial
 * 
 */
export type Filial = $Result.DefaultSelection<Prisma.$FilialPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Estoque
 * 
 */
export type Estoque = $Result.DefaultSelection<Prisma.$EstoquePayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Unidade
 * 
 */
export type Unidade = $Result.DefaultSelection<Prisma.$UnidadePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permissao: {
  ADMIN: 'ADMIN',
  FUNCIONARIO: 'FUNCIONARIO',
  FINACEIRO: 'FINACEIRO',
  GERENTE: 'GERENTE'
};

export type Permissao = (typeof Permissao)[keyof typeof Permissao]

}

export type Permissao = $Enums.Permissao

export const Permissao: typeof $Enums.Permissao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filial`: Exposes CRUD operations for the **Filial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filials
    * const filials = await prisma.filial.findMany()
    * ```
    */
  get filial(): Prisma.FilialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estoque`: Exposes CRUD operations for the **Estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estoques
    * const estoques = await prisma.estoque.findMany()
    * ```
    */
  get estoque(): Prisma.EstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidade`: Exposes CRUD operations for the **Unidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidades
    * const unidades = await prisma.unidade.findMany()
    * ```
    */
  get unidade(): Prisma.UnidadeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Empresa: 'Empresa',
    Filial: 'Filial',
    Cliente: 'Cliente',
    Produto: 'Produto',
    Estoque: 'Estoque',
    Usuarios: 'Usuarios',
    Unidade: 'Unidade'
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
      modelProps: "empresa" | "filial" | "cliente" | "produto" | "estoque" | "usuarios" | "unidade"
      txIsolationLevel: never
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmpresaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmpresaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Filial: {
        payload: Prisma.$FilialPayload<ExtArgs>
        fields: Prisma.FilialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          findFirst: {
            args: Prisma.FilialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          findMany: {
            args: Prisma.FilialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>[]
          }
          create: {
            args: Prisma.FilialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          createMany: {
            args: Prisma.FilialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FilialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          update: {
            args: Prisma.FilialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          deleteMany: {
            args: Prisma.FilialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FilialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilialPayload>
          }
          aggregate: {
            args: Prisma.FilialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilial>
          }
          groupBy: {
            args: Prisma.FilialGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FilialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FilialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FilialCountArgs<ExtArgs>
            result: $Utils.Optional<FilialCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ClienteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ClienteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProdutoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProdutoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Estoque: {
        payload: Prisma.$EstoquePayload<ExtArgs>
        fields: Prisma.EstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          findFirst: {
            args: Prisma.EstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          findMany: {
            args: Prisma.EstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>[]
          }
          create: {
            args: Prisma.EstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          createMany: {
            args: Prisma.EstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          update: {
            args: Prisma.EstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          deleteMany: {
            args: Prisma.EstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquePayload>
          }
          aggregate: {
            args: Prisma.EstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoque>
          }
          groupBy: {
            args: Prisma.EstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstoqueGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EstoqueFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EstoqueAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<EstoqueCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuariosFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuariosAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Unidade: {
        payload: Prisma.$UnidadePayload<ExtArgs>
        fields: Prisma.UnidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          findFirst: {
            args: Prisma.UnidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          findMany: {
            args: Prisma.UnidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>[]
          }
          create: {
            args: Prisma.UnidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          createMany: {
            args: Prisma.UnidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          update: {
            args: Prisma.UnidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          deleteMany: {
            args: Prisma.UnidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          aggregate: {
            args: Prisma.UnidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidade>
          }
          groupBy: {
            args: Prisma.UnidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UnidadeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UnidadeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UnidadeCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadeCountAggregateOutputType> | number
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
    empresa?: EmpresaOmit
    filial?: FilialOmit
    cliente?: ClienteOmit
    produto?: ProdutoOmit
    estoque?: EstoqueOmit
    usuarios?: UsuariosOmit
    unidade?: UnidadeOmit
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    filiais: number
    Cliente: number
    usuarios: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filiais?: boolean | EmpresaCountOutputTypeCountFiliaisArgs
    Cliente?: boolean | EmpresaCountOutputTypeCountClienteArgs
    usuarios?: boolean | EmpresaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountFiliaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilialWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
  }


  /**
   * Count Type FilialCountOutputType
   */

  export type FilialCountOutputType = {
    clientes: number
    produtos: number
    estoque: number
  }

  export type FilialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | FilialCountOutputTypeCountClientesArgs
    produtos?: boolean | FilialCountOutputTypeCountProdutosArgs
    estoque?: boolean | FilialCountOutputTypeCountEstoqueArgs
  }

  // Custom InputTypes
  /**
   * FilialCountOutputType without action
   */
  export type FilialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilialCountOutputType
     */
    select?: FilialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilialCountOutputType without action
   */
  export type FilialCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * FilialCountOutputType without action
   */
  export type FilialCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * FilialCountOutputType without action
   */
  export type FilialCountOutputTypeCountEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    estoque: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoque?: boolean | ProdutoCountOutputTypeCountEstoqueArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueWhereInput
  }


  /**
   * Count Type UnidadeCountOutputType
   */

  export type UnidadeCountOutputType = {
    produtosVenda: number
    produtosCompra: number
  }

  export type UnidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtosVenda?: boolean | UnidadeCountOutputTypeCountProdutosVendaArgs
    produtosCompra?: boolean | UnidadeCountOutputTypeCountProdutosCompraArgs
  }

  // Custom InputTypes
  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeCountOutputType
     */
    select?: UnidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeCountProdutosVendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeCountProdutosCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Endereco
   */





  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inscEstadual?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    uf?: boolean
    cep?: boolean
  }, ExtArgs["result"]["endereco"]>



  export type EnderecoSelectScalar = {
    inscEstadual?: boolean
    rua?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    uf?: boolean
    cep?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inscEstadual" | "rua" | "numero" | "bairro" | "cidade" | "estado" | "uf" | "cep", ExtArgs["result"]["endereco"]>

  export type $EnderecoPayload = {
    name: "Endereco"
    objects: {}
    scalars: {
      inscEstadual: string
      rua: string
      numero: number
      bairro: string
      cidade: string
      estado: string
      uf: string
      cep: string
    }
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>





  /**
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly inscEstadual: FieldRef<"Endereco", 'String'>
    readonly rua: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'Int'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
    readonly uf: FieldRef<"Endereco", 'String'>
    readonly cep: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filiais?: boolean | Empresa$filiaisArgs<ExtArgs>
    Cliente?: boolean | Empresa$ClienteArgs<ExtArgs>
    usuarios?: boolean | Empresa$usuariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type EmpresaSelectScalar = {
    id?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filiais?: boolean | Empresa$filiaisArgs<ExtArgs>
    Cliente?: boolean | Empresa$ClienteArgs<ExtArgs>
    usuarios?: boolean | Empresa$usuariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      filiais: Prisma.$FilialPayload<ExtArgs>[]
      Cliente: Prisma.$ClientePayload<ExtArgs>[]
      usuarios: Prisma.$UsuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * @param {EmpresaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const empresa = await prisma.empresa.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmpresaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Empresa.
     * @param {EmpresaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const empresa = await prisma.empresa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmpresaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filiais<T extends Empresa$filiaisArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$filiaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cliente<T extends Empresa$ClienteArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$ClienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Empresa$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data?: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa findRaw
   */
  export type EmpresaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Empresa aggregateRaw
   */
  export type EmpresaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Empresa.filiais
   */
  export type Empresa$filiaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    where?: FilialWhereInput
    orderBy?: FilialOrderByWithRelationInput | FilialOrderByWithRelationInput[]
    cursor?: FilialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilialScalarFieldEnum | FilialScalarFieldEnum[]
  }

  /**
   * Empresa.Cliente
   */
  export type Empresa$ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Empresa.usuarios
   */
  export type Empresa$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    cursor?: UsuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Filial
   */

  export type AggregateFilial = {
    _count: FilialCountAggregateOutputType | null
    _min: FilialMinAggregateOutputType | null
    _max: FilialMaxAggregateOutputType | null
  }

  export type FilialMinAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    empresaId: string | null
  }

  export type FilialMaxAggregateOutputType = {
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    empresaId: string | null
  }

  export type FilialCountAggregateOutputType = {
    id: number
    razaoSocial: number
    nomeFantasia: number
    cnpj: number
    telefone: number
    email: number
    empresaId: number
    _all: number
  }


  export type FilialMinAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    telefone?: true
    email?: true
    empresaId?: true
  }

  export type FilialMaxAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    telefone?: true
    email?: true
    empresaId?: true
  }

  export type FilialCountAggregateInputType = {
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    telefone?: true
    email?: true
    empresaId?: true
    _all?: true
  }

  export type FilialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filial to aggregate.
     */
    where?: FilialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filials to fetch.
     */
    orderBy?: FilialOrderByWithRelationInput | FilialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filials
    **/
    _count?: true | FilialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilialMaxAggregateInputType
  }

  export type GetFilialAggregateType<T extends FilialAggregateArgs> = {
        [P in keyof T & keyof AggregateFilial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilial[P]>
      : GetScalarType<T[P], AggregateFilial[P]>
  }




  export type FilialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilialWhereInput
    orderBy?: FilialOrderByWithAggregationInput | FilialOrderByWithAggregationInput[]
    by: FilialScalarFieldEnum[] | FilialScalarFieldEnum
    having?: FilialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilialCountAggregateInputType | true
    _min?: FilialMinAggregateInputType
    _max?: FilialMaxAggregateInputType
  }

  export type FilialGroupByOutputType = {
    id: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone: string | null
    email: string | null
    empresaId: string
    _count: FilialCountAggregateOutputType | null
    _min: FilialMinAggregateOutputType | null
    _max: FilialMaxAggregateOutputType | null
  }

  type GetFilialGroupByPayload<T extends FilialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilialGroupByOutputType[P]>
            : GetScalarType<T[P], FilialGroupByOutputType[P]>
        }
      >
    >


  export type FilialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    clientes?: boolean | Filial$clientesArgs<ExtArgs>
    produtos?: boolean | Filial$produtosArgs<ExtArgs>
    estoque?: boolean | Filial$estoqueArgs<ExtArgs>
    _count?: boolean | FilialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filial"]>



  export type FilialSelectScalar = {
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    empresaId?: boolean
  }

  export type FilialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razaoSocial" | "nomeFantasia" | "cnpj" | "telefone" | "email" | "endereco" | "empresaId", ExtArgs["result"]["filial"]>
  export type FilialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    clientes?: boolean | Filial$clientesArgs<ExtArgs>
    produtos?: boolean | Filial$produtosArgs<ExtArgs>
    estoque?: boolean | Filial$estoqueArgs<ExtArgs>
    _count?: boolean | FilialCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FilialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filial"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      clientes: Prisma.$ClientePayload<ExtArgs>[]
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      estoque: Prisma.$EstoquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razaoSocial: string
      nomeFantasia: string
      cnpj: string
      telefone: string | null
      email: string | null
      empresaId: string
    }, ExtArgs["result"]["filial"]>
    composites: {
      endereco: Prisma.$EnderecoPayload
    }
  }

  type FilialGetPayload<S extends boolean | null | undefined | FilialDefaultArgs> = $Result.GetResult<Prisma.$FilialPayload, S>

  type FilialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilialCountAggregateInputType | true
    }

  export interface FilialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filial'], meta: { name: 'Filial' } }
    /**
     * Find zero or one Filial that matches the filter.
     * @param {FilialFindUniqueArgs} args - Arguments to find a Filial
     * @example
     * // Get one Filial
     * const filial = await prisma.filial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilialFindUniqueArgs>(args: SelectSubset<T, FilialFindUniqueArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilialFindUniqueOrThrowArgs} args - Arguments to find a Filial
     * @example
     * // Get one Filial
     * const filial = await prisma.filial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilialFindUniqueOrThrowArgs>(args: SelectSubset<T, FilialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialFindFirstArgs} args - Arguments to find a Filial
     * @example
     * // Get one Filial
     * const filial = await prisma.filial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilialFindFirstArgs>(args?: SelectSubset<T, FilialFindFirstArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialFindFirstOrThrowArgs} args - Arguments to find a Filial
     * @example
     * // Get one Filial
     * const filial = await prisma.filial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilialFindFirstOrThrowArgs>(args?: SelectSubset<T, FilialFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filials
     * const filials = await prisma.filial.findMany()
     * 
     * // Get first 10 Filials
     * const filials = await prisma.filial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filialWithIdOnly = await prisma.filial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilialFindManyArgs>(args?: SelectSubset<T, FilialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filial.
     * @param {FilialCreateArgs} args - Arguments to create a Filial.
     * @example
     * // Create one Filial
     * const Filial = await prisma.filial.create({
     *   data: {
     *     // ... data to create a Filial
     *   }
     * })
     * 
     */
    create<T extends FilialCreateArgs>(args: SelectSubset<T, FilialCreateArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filials.
     * @param {FilialCreateManyArgs} args - Arguments to create many Filials.
     * @example
     * // Create many Filials
     * const filial = await prisma.filial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilialCreateManyArgs>(args?: SelectSubset<T, FilialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Filial.
     * @param {FilialDeleteArgs} args - Arguments to delete one Filial.
     * @example
     * // Delete one Filial
     * const Filial = await prisma.filial.delete({
     *   where: {
     *     // ... filter to delete one Filial
     *   }
     * })
     * 
     */
    delete<T extends FilialDeleteArgs>(args: SelectSubset<T, FilialDeleteArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filial.
     * @param {FilialUpdateArgs} args - Arguments to update one Filial.
     * @example
     * // Update one Filial
     * const filial = await prisma.filial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilialUpdateArgs>(args: SelectSubset<T, FilialUpdateArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filials.
     * @param {FilialDeleteManyArgs} args - Arguments to filter Filials to delete.
     * @example
     * // Delete a few Filials
     * const { count } = await prisma.filial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilialDeleteManyArgs>(args?: SelectSubset<T, FilialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filials
     * const filial = await prisma.filial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilialUpdateManyArgs>(args: SelectSubset<T, FilialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Filial.
     * @param {FilialUpsertArgs} args - Arguments to update or create a Filial.
     * @example
     * // Update or create a Filial
     * const filial = await prisma.filial.upsert({
     *   create: {
     *     // ... data to create a Filial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filial we want to update
     *   }
     * })
     */
    upsert<T extends FilialUpsertArgs>(args: SelectSubset<T, FilialUpsertArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filials that matches the filter.
     * @param {FilialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const filial = await prisma.filial.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FilialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Filial.
     * @param {FilialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const filial = await prisma.filial.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FilialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Filials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialCountArgs} args - Arguments to filter Filials to count.
     * @example
     * // Count the number of Filials
     * const count = await prisma.filial.count({
     *   where: {
     *     // ... the filter for the Filials we want to count
     *   }
     * })
    **/
    count<T extends FilialCountArgs>(
      args?: Subset<T, FilialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilialAggregateArgs>(args: Subset<T, FilialAggregateArgs>): Prisma.PrismaPromise<GetFilialAggregateType<T>>

    /**
     * Group by Filial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilialGroupByArgs} args - Group by arguments.
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
      T extends FilialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilialGroupByArgs['orderBy'] }
        : { orderBy?: FilialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filial model
   */
  readonly fields: FilialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientes<T extends Filial$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Filial$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtos<T extends Filial$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Filial$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estoque<T extends Filial$estoqueArgs<ExtArgs> = {}>(args?: Subset<T, Filial$estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Filial model
   */
  interface FilialFieldRefs {
    readonly id: FieldRef<"Filial", 'String'>
    readonly razaoSocial: FieldRef<"Filial", 'String'>
    readonly nomeFantasia: FieldRef<"Filial", 'String'>
    readonly cnpj: FieldRef<"Filial", 'String'>
    readonly telefone: FieldRef<"Filial", 'String'>
    readonly email: FieldRef<"Filial", 'String'>
    readonly empresaId: FieldRef<"Filial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Filial findUnique
   */
  export type FilialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter, which Filial to fetch.
     */
    where: FilialWhereUniqueInput
  }

  /**
   * Filial findUniqueOrThrow
   */
  export type FilialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter, which Filial to fetch.
     */
    where: FilialWhereUniqueInput
  }

  /**
   * Filial findFirst
   */
  export type FilialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter, which Filial to fetch.
     */
    where?: FilialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filials to fetch.
     */
    orderBy?: FilialOrderByWithRelationInput | FilialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filials.
     */
    cursor?: FilialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filials.
     */
    distinct?: FilialScalarFieldEnum | FilialScalarFieldEnum[]
  }

  /**
   * Filial findFirstOrThrow
   */
  export type FilialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter, which Filial to fetch.
     */
    where?: FilialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filials to fetch.
     */
    orderBy?: FilialOrderByWithRelationInput | FilialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filials.
     */
    cursor?: FilialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filials.
     */
    distinct?: FilialScalarFieldEnum | FilialScalarFieldEnum[]
  }

  /**
   * Filial findMany
   */
  export type FilialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter, which Filials to fetch.
     */
    where?: FilialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filials to fetch.
     */
    orderBy?: FilialOrderByWithRelationInput | FilialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filials.
     */
    cursor?: FilialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filials.
     */
    skip?: number
    distinct?: FilialScalarFieldEnum | FilialScalarFieldEnum[]
  }

  /**
   * Filial create
   */
  export type FilialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * The data needed to create a Filial.
     */
    data: XOR<FilialCreateInput, FilialUncheckedCreateInput>
  }

  /**
   * Filial createMany
   */
  export type FilialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filials.
     */
    data: FilialCreateManyInput | FilialCreateManyInput[]
  }

  /**
   * Filial update
   */
  export type FilialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * The data needed to update a Filial.
     */
    data: XOR<FilialUpdateInput, FilialUncheckedUpdateInput>
    /**
     * Choose, which Filial to update.
     */
    where: FilialWhereUniqueInput
  }

  /**
   * Filial updateMany
   */
  export type FilialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filials.
     */
    data: XOR<FilialUpdateManyMutationInput, FilialUncheckedUpdateManyInput>
    /**
     * Filter which Filials to update
     */
    where?: FilialWhereInput
    /**
     * Limit how many Filials to update.
     */
    limit?: number
  }

  /**
   * Filial upsert
   */
  export type FilialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * The filter to search for the Filial to update in case it exists.
     */
    where: FilialWhereUniqueInput
    /**
     * In case the Filial found by the `where` argument doesn't exist, create a new Filial with this data.
     */
    create: XOR<FilialCreateInput, FilialUncheckedCreateInput>
    /**
     * In case the Filial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilialUpdateInput, FilialUncheckedUpdateInput>
  }

  /**
   * Filial delete
   */
  export type FilialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    /**
     * Filter which Filial to delete.
     */
    where: FilialWhereUniqueInput
  }

  /**
   * Filial deleteMany
   */
  export type FilialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filials to delete
     */
    where?: FilialWhereInput
    /**
     * Limit how many Filials to delete.
     */
    limit?: number
  }

  /**
   * Filial findRaw
   */
  export type FilialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Filial aggregateRaw
   */
  export type FilialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Filial.clientes
   */
  export type Filial$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Filial.produtos
   */
  export type Filial$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Filial.estoque
   */
  export type Filial$estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    where?: EstoqueWhereInput
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    cursor?: EstoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Filial without action
   */
  export type FilialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    empresaId: string | null
    filialId: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    empresaId: string | null
    filialId: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    empresaId: number
    filialId: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    empresaId?: true
    filialId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    empresaId?: true
    filialId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    empresaId?: true
    filialId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    empresaId: string | null
    filialId: string | null
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    empresaId?: boolean
    filialId?: boolean
    empresa?: boolean | Cliente$empresaArgs<ExtArgs>
    filial?: boolean | Cliente$filialArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    empresaId?: boolean
    filialId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "endereco" | "empresaId" | "filialId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | Cliente$empresaArgs<ExtArgs>
    filial?: boolean | Cliente$filialArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs> | null
      filial: Prisma.$FilialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      empresaId: string | null
      filialId: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {
      endereco: Prisma.$EnderecoPayload
    }
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * @param {ClienteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cliente = await prisma.cliente.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ClienteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cliente.
     * @param {ClienteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cliente = await prisma.cliente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ClienteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends Cliente$empresaArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$empresaArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    filial<T extends Cliente$filialArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$filialArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly empresaId: FieldRef<"Cliente", 'String'>
    readonly filialId: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente findRaw
   */
  export type ClienteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cliente aggregateRaw
   */
  export type ClienteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cliente.empresa
   */
  export type Cliente$empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    where?: EmpresaWhereInput
  }

  /**
   * Cliente.filial
   */
  export type Cliente$filialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filial
     */
    select?: FilialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filial
     */
    omit?: FilialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilialInclude<ExtArgs> | null
    where?: FilialWhereInput
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    precoVenda: number | null
    precoCompra: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    precoVenda: number | null
    precoCompra: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    precoVenda: number | null
    precoCompra: number | null
    undVendaId: string | null
    undCompraId: string | null
    filialId: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    precoVenda: number | null
    precoCompra: number | null
    undVendaId: string | null
    undCompraId: string | null
    filialId: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    precoVenda: number
    precoCompra: number
    undVendaId: number
    undCompraId: number
    filialId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    precoVenda?: true
    precoCompra?: true
  }

  export type ProdutoSumAggregateInputType = {
    precoVenda?: true
    precoCompra?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    precoCompra?: true
    undVendaId?: true
    undCompraId?: true
    filialId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    precoCompra?: true
    undVendaId?: true
    undCompraId?: true
    filialId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    precoCompra?: true
    undVendaId?: true
    undCompraId?: true
    filialId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
    filialId: string
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    precoCompra?: boolean
    undVendaId?: boolean
    undCompraId?: boolean
    filialId?: boolean
    undVenda?: boolean | UnidadeDefaultArgs<ExtArgs>
    undCompra?: boolean | UnidadeDefaultArgs<ExtArgs>
    filial?: boolean | FilialDefaultArgs<ExtArgs>
    estoque?: boolean | Produto$estoqueArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>



  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    precoCompra?: boolean
    undVendaId?: boolean
    undCompraId?: boolean
    filialId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "precoVenda" | "precoCompra" | "undVendaId" | "undCompraId" | "filialId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    undVenda?: boolean | UnidadeDefaultArgs<ExtArgs>
    undCompra?: boolean | UnidadeDefaultArgs<ExtArgs>
    filial?: boolean | FilialDefaultArgs<ExtArgs>
    estoque?: boolean | Produto$estoqueArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      undVenda: Prisma.$UnidadePayload<ExtArgs>
      undCompra: Prisma.$UnidadePayload<ExtArgs>
      filial: Prisma.$FilialPayload<ExtArgs>
      estoque: Prisma.$EstoquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      precoVenda: number
      precoCompra: number
      undVendaId: string
      undCompraId: string
      filialId: string
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * @param {ProdutoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const produto = await prisma.produto.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProdutoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Produto.
     * @param {ProdutoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const produto = await prisma.produto.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProdutoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    undVenda<T extends UnidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadeDefaultArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    undCompra<T extends UnidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadeDefaultArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filial<T extends FilialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilialDefaultArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estoque<T extends Produto$estoqueArgs<ExtArgs> = {}>(args?: Subset<T, Produto$estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'String'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly precoVenda: FieldRef<"Produto", 'Float'>
    readonly precoCompra: FieldRef<"Produto", 'Float'>
    readonly undVendaId: FieldRef<"Produto", 'String'>
    readonly undCompraId: FieldRef<"Produto", 'String'>
    readonly filialId: FieldRef<"Produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto findRaw
   */
  export type ProdutoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produto aggregateRaw
   */
  export type ProdutoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produto.estoque
   */
  export type Produto$estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    where?: EstoqueWhereInput
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    cursor?: EstoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Estoque
   */

  export type AggregateEstoque = {
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  export type EstoqueAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type EstoqueSumAggregateOutputType = {
    quantidade: number | null
  }

  export type EstoqueMinAggregateOutputType = {
    id: string | null
    quantidade: number | null
    filialId: string | null
    produtoId: string | null
  }

  export type EstoqueMaxAggregateOutputType = {
    id: string | null
    quantidade: number | null
    filialId: string | null
    produtoId: string | null
  }

  export type EstoqueCountAggregateOutputType = {
    id: number
    quantidade: number
    filialId: number
    produtoId: number
    _all: number
  }


  export type EstoqueAvgAggregateInputType = {
    quantidade?: true
  }

  export type EstoqueSumAggregateInputType = {
    quantidade?: true
  }

  export type EstoqueMinAggregateInputType = {
    id?: true
    quantidade?: true
    filialId?: true
    produtoId?: true
  }

  export type EstoqueMaxAggregateInputType = {
    id?: true
    quantidade?: true
    filialId?: true
    produtoId?: true
  }

  export type EstoqueCountAggregateInputType = {
    id?: true
    quantidade?: true
    filialId?: true
    produtoId?: true
    _all?: true
  }

  export type EstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoque to aggregate.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estoques
    **/
    _count?: true | EstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstoqueMaxAggregateInputType
  }

  export type GetEstoqueAggregateType<T extends EstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoque[P]>
      : GetScalarType<T[P], AggregateEstoque[P]>
  }




  export type EstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueWhereInput
    orderBy?: EstoqueOrderByWithAggregationInput | EstoqueOrderByWithAggregationInput[]
    by: EstoqueScalarFieldEnum[] | EstoqueScalarFieldEnum
    having?: EstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstoqueCountAggregateInputType | true
    _avg?: EstoqueAvgAggregateInputType
    _sum?: EstoqueSumAggregateInputType
    _min?: EstoqueMinAggregateInputType
    _max?: EstoqueMaxAggregateInputType
  }

  export type EstoqueGroupByOutputType = {
    id: string
    quantidade: number
    filialId: string
    produtoId: string
    _count: EstoqueCountAggregateOutputType | null
    _avg: EstoqueAvgAggregateOutputType | null
    _sum: EstoqueSumAggregateOutputType | null
    _min: EstoqueMinAggregateOutputType | null
    _max: EstoqueMaxAggregateOutputType | null
  }

  type GetEstoqueGroupByPayload<T extends EstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], EstoqueGroupByOutputType[P]>
        }
      >
    >


  export type EstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    filialId?: boolean
    produtoId?: boolean
    filial?: boolean | FilialDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoque"]>



  export type EstoqueSelectScalar = {
    id?: boolean
    quantidade?: boolean
    filialId?: boolean
    produtoId?: boolean
  }

  export type EstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "filialId" | "produtoId", ExtArgs["result"]["estoque"]>
  export type EstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filial?: boolean | FilialDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $EstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estoque"
    objects: {
      filial: Prisma.$FilialPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantidade: number
      filialId: string
      produtoId: string
    }, ExtArgs["result"]["estoque"]>
    composites: {}
  }

  type EstoqueGetPayload<S extends boolean | null | undefined | EstoqueDefaultArgs> = $Result.GetResult<Prisma.$EstoquePayload, S>

  type EstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstoqueCountAggregateInputType | true
    }

  export interface EstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estoque'], meta: { name: 'Estoque' } }
    /**
     * Find zero or one Estoque that matches the filter.
     * @param {EstoqueFindUniqueArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstoqueFindUniqueArgs>(args: SelectSubset<T, EstoqueFindUniqueArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstoqueFindUniqueOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, EstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindFirstArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstoqueFindFirstArgs>(args?: SelectSubset<T, EstoqueFindFirstArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindFirstOrThrowArgs} args - Arguments to find a Estoque
     * @example
     * // Get one Estoque
     * const estoque = await prisma.estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, EstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estoques
     * const estoques = await prisma.estoque.findMany()
     * 
     * // Get first 10 Estoques
     * const estoques = await prisma.estoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estoqueWithIdOnly = await prisma.estoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstoqueFindManyArgs>(args?: SelectSubset<T, EstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estoque.
     * @param {EstoqueCreateArgs} args - Arguments to create a Estoque.
     * @example
     * // Create one Estoque
     * const Estoque = await prisma.estoque.create({
     *   data: {
     *     // ... data to create a Estoque
     *   }
     * })
     * 
     */
    create<T extends EstoqueCreateArgs>(args: SelectSubset<T, EstoqueCreateArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estoques.
     * @param {EstoqueCreateManyArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoque = await prisma.estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstoqueCreateManyArgs>(args?: SelectSubset<T, EstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estoque.
     * @param {EstoqueDeleteArgs} args - Arguments to delete one Estoque.
     * @example
     * // Delete one Estoque
     * const Estoque = await prisma.estoque.delete({
     *   where: {
     *     // ... filter to delete one Estoque
     *   }
     * })
     * 
     */
    delete<T extends EstoqueDeleteArgs>(args: SelectSubset<T, EstoqueDeleteArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estoque.
     * @param {EstoqueUpdateArgs} args - Arguments to update one Estoque.
     * @example
     * // Update one Estoque
     * const estoque = await prisma.estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstoqueUpdateArgs>(args: SelectSubset<T, EstoqueUpdateArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estoques.
     * @param {EstoqueDeleteManyArgs} args - Arguments to filter Estoques to delete.
     * @example
     * // Delete a few Estoques
     * const { count } = await prisma.estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstoqueDeleteManyArgs>(args?: SelectSubset<T, EstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estoques
     * const estoque = await prisma.estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstoqueUpdateManyArgs>(args: SelectSubset<T, EstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estoque.
     * @param {EstoqueUpsertArgs} args - Arguments to update or create a Estoque.
     * @example
     * // Update or create a Estoque
     * const estoque = await prisma.estoque.upsert({
     *   create: {
     *     // ... data to create a Estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estoque we want to update
     *   }
     * })
     */
    upsert<T extends EstoqueUpsertArgs>(args: SelectSubset<T, EstoqueUpsertArgs<ExtArgs>>): Prisma__EstoqueClient<$Result.GetResult<Prisma.$EstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoques that matches the filter.
     * @param {EstoqueFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const estoque = await prisma.estoque.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EstoqueFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Estoque.
     * @param {EstoqueAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const estoque = await prisma.estoque.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EstoqueAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueCountArgs} args - Arguments to filter Estoques to count.
     * @example
     * // Count the number of Estoques
     * const count = await prisma.estoque.count({
     *   where: {
     *     // ... the filter for the Estoques we want to count
     *   }
     * })
    **/
    count<T extends EstoqueCountArgs>(
      args?: Subset<T, EstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstoqueAggregateArgs>(args: Subset<T, EstoqueAggregateArgs>): Prisma.PrismaPromise<GetEstoqueAggregateType<T>>

    /**
     * Group by Estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueGroupByArgs} args - Group by arguments.
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
      T extends EstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstoqueGroupByArgs['orderBy'] }
        : { orderBy?: EstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estoque model
   */
  readonly fields: EstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filial<T extends FilialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilialDefaultArgs<ExtArgs>>): Prisma__FilialClient<$Result.GetResult<Prisma.$FilialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Estoque model
   */
  interface EstoqueFieldRefs {
    readonly id: FieldRef<"Estoque", 'String'>
    readonly quantidade: FieldRef<"Estoque", 'Float'>
    readonly filialId: FieldRef<"Estoque", 'String'>
    readonly produtoId: FieldRef<"Estoque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estoque findUnique
   */
  export type EstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque findUniqueOrThrow
   */
  export type EstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque findFirst
   */
  export type EstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque findFirstOrThrow
   */
  export type EstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoque to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque findMany
   */
  export type EstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where?: EstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoqueOrderByWithRelationInput | EstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estoques.
     */
    cursor?: EstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    distinct?: EstoqueScalarFieldEnum | EstoqueScalarFieldEnum[]
  }

  /**
   * Estoque create
   */
  export type EstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Estoque.
     */
    data: XOR<EstoqueCreateInput, EstoqueUncheckedCreateInput>
  }

  /**
   * Estoque createMany
   */
  export type EstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estoques.
     */
    data: EstoqueCreateManyInput | EstoqueCreateManyInput[]
  }

  /**
   * Estoque update
   */
  export type EstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Estoque.
     */
    data: XOR<EstoqueUpdateInput, EstoqueUncheckedUpdateInput>
    /**
     * Choose, which Estoque to update.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque updateMany
   */
  export type EstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estoques.
     */
    data: XOR<EstoqueUpdateManyMutationInput, EstoqueUncheckedUpdateManyInput>
    /**
     * Filter which Estoques to update
     */
    where?: EstoqueWhereInput
    /**
     * Limit how many Estoques to update.
     */
    limit?: number
  }

  /**
   * Estoque upsert
   */
  export type EstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Estoque to update in case it exists.
     */
    where: EstoqueWhereUniqueInput
    /**
     * In case the Estoque found by the `where` argument doesn't exist, create a new Estoque with this data.
     */
    create: XOR<EstoqueCreateInput, EstoqueUncheckedCreateInput>
    /**
     * In case the Estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstoqueUpdateInput, EstoqueUncheckedUpdateInput>
  }

  /**
   * Estoque delete
   */
  export type EstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
    /**
     * Filter which Estoque to delete.
     */
    where: EstoqueWhereUniqueInput
  }

  /**
   * Estoque deleteMany
   */
  export type EstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoques to delete
     */
    where?: EstoqueWhereInput
    /**
     * Limit how many Estoques to delete.
     */
    limit?: number
  }

  /**
   * Estoque findRaw
   */
  export type EstoqueFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Estoque aggregateRaw
   */
  export type EstoqueAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Estoque without action
   */
  export type EstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoque
     */
    select?: EstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoque
     */
    omit?: EstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    permissao: $Enums.Permissao | null
    empresaId: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    permissao: $Enums.Permissao | null
    empresaId: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    permissao: number
    empresaId: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    empresaId?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    empresaId?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    permissao?: true
    empresaId?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nome: string | null
    email: string | null
    senha: string | null
    permissao: $Enums.Permissao
    empresaId: string
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    permissao?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    permissao?: boolean
    empresaId?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "permissao" | "empresaId", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string | null
      email: string | null
      senha: string | null
      permissao: $Enums.Permissao
      empresaId: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuariosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuarios = await prisma.usuarios.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UsuariosFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuarios.
     * @param {UsuariosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuarios = await prisma.usuarios.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsuariosAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly nome: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly senha: FieldRef<"Usuarios", 'String'>
    readonly permissao: FieldRef<"Usuarios", 'Permissao'>
    readonly empresaId: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios findRaw
   */
  export type UsuariosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuarios aggregateRaw
   */
  export type UsuariosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Unidade
   */

  export type AggregateUnidade = {
    _count: UnidadeCountAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  export type UnidadeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
  }

  export type UnidadeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
  }

  export type UnidadeCountAggregateOutputType = {
    id: number
    nome: number
    sigla: number
    _all: number
  }


  export type UnidadeMinAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
  }

  export type UnidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
  }

  export type UnidadeCountAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    _all?: true
  }

  export type UnidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidade to aggregate.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unidades
    **/
    _count?: true | UnidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadeMaxAggregateInputType
  }

  export type GetUnidadeAggregateType<T extends UnidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidade[P]>
      : GetScalarType<T[P], AggregateUnidade[P]>
  }




  export type UnidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadeWhereInput
    orderBy?: UnidadeOrderByWithAggregationInput | UnidadeOrderByWithAggregationInput[]
    by: UnidadeScalarFieldEnum[] | UnidadeScalarFieldEnum
    having?: UnidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadeCountAggregateInputType | true
    _min?: UnidadeMinAggregateInputType
    _max?: UnidadeMaxAggregateInputType
  }

  export type UnidadeGroupByOutputType = {
    id: string
    nome: string
    sigla: string
    _count: UnidadeCountAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  type GetUnidadeGroupByPayload<T extends UnidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
        }
      >
    >


  export type UnidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    produtosVenda?: boolean | Unidade$produtosVendaArgs<ExtArgs>
    produtosCompra?: boolean | Unidade$produtosCompraArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidade"]>



  export type UnidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    sigla?: boolean
  }

  export type UnidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sigla", ExtArgs["result"]["unidade"]>
  export type UnidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtosVenda?: boolean | Unidade$produtosVendaArgs<ExtArgs>
    produtosCompra?: boolean | Unidade$produtosCompraArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unidade"
    objects: {
      produtosVenda: Prisma.$ProdutoPayload<ExtArgs>[]
      produtosCompra: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sigla: string
    }, ExtArgs["result"]["unidade"]>
    composites: {}
  }

  type UnidadeGetPayload<S extends boolean | null | undefined | UnidadeDefaultArgs> = $Result.GetResult<Prisma.$UnidadePayload, S>

  type UnidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadeCountAggregateInputType | true
    }

  export interface UnidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unidade'], meta: { name: 'Unidade' } }
    /**
     * Find zero or one Unidade that matches the filter.
     * @param {UnidadeFindUniqueArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadeFindUniqueArgs>(args: SelectSubset<T, UnidadeFindUniqueArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnidadeFindUniqueOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindFirstArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadeFindFirstArgs>(args?: SelectSubset<T, UnidadeFindFirstArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindFirstOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidades
     * const unidades = await prisma.unidade.findMany()
     * 
     * // Get first 10 Unidades
     * const unidades = await prisma.unidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unidadeWithIdOnly = await prisma.unidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnidadeFindManyArgs>(args?: SelectSubset<T, UnidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidade.
     * @param {UnidadeCreateArgs} args - Arguments to create a Unidade.
     * @example
     * // Create one Unidade
     * const Unidade = await prisma.unidade.create({
     *   data: {
     *     // ... data to create a Unidade
     *   }
     * })
     * 
     */
    create<T extends UnidadeCreateArgs>(args: SelectSubset<T, UnidadeCreateArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidades.
     * @param {UnidadeCreateManyArgs} args - Arguments to create many Unidades.
     * @example
     * // Create many Unidades
     * const unidade = await prisma.unidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadeCreateManyArgs>(args?: SelectSubset<T, UnidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unidade.
     * @param {UnidadeDeleteArgs} args - Arguments to delete one Unidade.
     * @example
     * // Delete one Unidade
     * const Unidade = await prisma.unidade.delete({
     *   where: {
     *     // ... filter to delete one Unidade
     *   }
     * })
     * 
     */
    delete<T extends UnidadeDeleteArgs>(args: SelectSubset<T, UnidadeDeleteArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidade.
     * @param {UnidadeUpdateArgs} args - Arguments to update one Unidade.
     * @example
     * // Update one Unidade
     * const unidade = await prisma.unidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadeUpdateArgs>(args: SelectSubset<T, UnidadeUpdateArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidades.
     * @param {UnidadeDeleteManyArgs} args - Arguments to filter Unidades to delete.
     * @example
     * // Delete a few Unidades
     * const { count } = await prisma.unidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadeDeleteManyArgs>(args?: SelectSubset<T, UnidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidades
     * const unidade = await prisma.unidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadeUpdateManyArgs>(args: SelectSubset<T, UnidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unidade.
     * @param {UnidadeUpsertArgs} args - Arguments to update or create a Unidade.
     * @example
     * // Update or create a Unidade
     * const unidade = await prisma.unidade.upsert({
     *   create: {
     *     // ... data to create a Unidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidade we want to update
     *   }
     * })
     */
    upsert<T extends UnidadeUpsertArgs>(args: SelectSubset<T, UnidadeUpsertArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidades that matches the filter.
     * @param {UnidadeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const unidade = await prisma.unidade.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UnidadeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Unidade.
     * @param {UnidadeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const unidade = await prisma.unidade.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UnidadeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeCountArgs} args - Arguments to filter Unidades to count.
     * @example
     * // Count the number of Unidades
     * const count = await prisma.unidade.count({
     *   where: {
     *     // ... the filter for the Unidades we want to count
     *   }
     * })
    **/
    count<T extends UnidadeCountArgs>(
      args?: Subset<T, UnidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnidadeAggregateArgs>(args: Subset<T, UnidadeAggregateArgs>): Prisma.PrismaPromise<GetUnidadeAggregateType<T>>

    /**
     * Group by Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeGroupByArgs} args - Group by arguments.
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
      T extends UnidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadeGroupByArgs['orderBy'] }
        : { orderBy?: UnidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unidade model
   */
  readonly fields: UnidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtosVenda<T extends Unidade$produtosVendaArgs<ExtArgs> = {}>(args?: Subset<T, Unidade$produtosVendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtosCompra<T extends Unidade$produtosCompraArgs<ExtArgs> = {}>(args?: Subset<T, Unidade$produtosCompraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unidade model
   */
  interface UnidadeFieldRefs {
    readonly id: FieldRef<"Unidade", 'String'>
    readonly nome: FieldRef<"Unidade", 'String'>
    readonly sigla: FieldRef<"Unidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unidade findUnique
   */
  export type UnidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade findUniqueOrThrow
   */
  export type UnidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade findFirst
   */
  export type UnidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade findFirstOrThrow
   */
  export type UnidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade findMany
   */
  export type UnidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade create
   */
  export type UnidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Unidade.
     */
    data: XOR<UnidadeCreateInput, UnidadeUncheckedCreateInput>
  }

  /**
   * Unidade createMany
   */
  export type UnidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unidades.
     */
    data: UnidadeCreateManyInput | UnidadeCreateManyInput[]
  }

  /**
   * Unidade update
   */
  export type UnidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Unidade.
     */
    data: XOR<UnidadeUpdateInput, UnidadeUncheckedUpdateInput>
    /**
     * Choose, which Unidade to update.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade updateMany
   */
  export type UnidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unidades.
     */
    data: XOR<UnidadeUpdateManyMutationInput, UnidadeUncheckedUpdateManyInput>
    /**
     * Filter which Unidades to update
     */
    where?: UnidadeWhereInput
    /**
     * Limit how many Unidades to update.
     */
    limit?: number
  }

  /**
   * Unidade upsert
   */
  export type UnidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Unidade to update in case it exists.
     */
    where: UnidadeWhereUniqueInput
    /**
     * In case the Unidade found by the `where` argument doesn't exist, create a new Unidade with this data.
     */
    create: XOR<UnidadeCreateInput, UnidadeUncheckedCreateInput>
    /**
     * In case the Unidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadeUpdateInput, UnidadeUncheckedUpdateInput>
  }

  /**
   * Unidade delete
   */
  export type UnidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter which Unidade to delete.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade deleteMany
   */
  export type UnidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidades to delete
     */
    where?: UnidadeWhereInput
    /**
     * Limit how many Unidades to delete.
     */
    limit?: number
  }

  /**
   * Unidade findRaw
   */
  export type UnidadeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Unidade aggregateRaw
   */
  export type UnidadeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Unidade.produtosVenda
   */
  export type Unidade$produtosVendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Unidade.produtosCompra
   */
  export type Unidade$produtosCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Unidade without action
   */
  export type UnidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidade
     */
    omit?: UnidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const EmpresaScalarFieldEnum: {
    id: 'id'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const FilialScalarFieldEnum: {
    id: 'id',
    razaoSocial: 'razaoSocial',
    nomeFantasia: 'nomeFantasia',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    empresaId: 'empresaId'
  };

  export type FilialScalarFieldEnum = (typeof FilialScalarFieldEnum)[keyof typeof FilialScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    empresaId: 'empresaId',
    filialId: 'filialId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    precoVenda: 'precoVenda',
    precoCompra: 'precoCompra',
    undVendaId: 'undVendaId',
    undCompraId: 'undCompraId',
    filialId: 'filialId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const EstoqueScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    filialId: 'filialId',
    produtoId: 'produtoId'
  };

  export type EstoqueScalarFieldEnum = (typeof EstoqueScalarFieldEnum)[keyof typeof EstoqueScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    permissao: 'permissao',
    empresaId: 'empresaId'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const UnidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sigla: 'sigla'
  };

  export type UnidadeScalarFieldEnum = (typeof UnidadeScalarFieldEnum)[keyof typeof UnidadeScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Permissao'
   */
  export type EnumPermissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permissao'>
    


  /**
   * Reference to a field of type 'Permissao[]'
   */
  export type ListEnumPermissaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permissao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    filiais?: FilialListRelationFilter
    Cliente?: ClienteListRelationFilter
    usuarios?: UsuariosListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    filiais?: FilialOrderByRelationAggregateInput
    Cliente?: ClienteOrderByRelationAggregateInput
    usuarios?: UsuariosOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    filiais?: FilialListRelationFilter
    Cliente?: ClienteListRelationFilter
    usuarios?: UsuariosListRelationFilter
  }, "id">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
  }

  export type FilialWhereInput = {
    AND?: FilialWhereInput | FilialWhereInput[]
    OR?: FilialWhereInput[]
    NOT?: FilialWhereInput | FilialWhereInput[]
    id?: StringFilter<"Filial"> | string
    razaoSocial?: StringFilter<"Filial"> | string
    nomeFantasia?: StringFilter<"Filial"> | string
    cnpj?: StringFilter<"Filial"> | string
    telefone?: StringNullableFilter<"Filial"> | string | null
    email?: StringNullableFilter<"Filial"> | string | null
    endereco?: XOR<EnderecoCompositeFilter, EnderecoObjectEqualityInput>
    empresaId?: StringFilter<"Filial"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    clientes?: ClienteListRelationFilter
    produtos?: ProdutoListRelationFilter
    estoque?: EstoqueListRelationFilter
  }

  export type FilialOrderByWithRelationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: EnderecoOrderByInput
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    clientes?: ClienteOrderByRelationAggregateInput
    produtos?: ProdutoOrderByRelationAggregateInput
    estoque?: EstoqueOrderByRelationAggregateInput
  }

  export type FilialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: FilialWhereInput | FilialWhereInput[]
    OR?: FilialWhereInput[]
    NOT?: FilialWhereInput | FilialWhereInput[]
    razaoSocial?: StringFilter<"Filial"> | string
    nomeFantasia?: StringFilter<"Filial"> | string
    telefone?: StringNullableFilter<"Filial"> | string | null
    email?: StringNullableFilter<"Filial"> | string | null
    endereco?: XOR<EnderecoCompositeFilter, EnderecoObjectEqualityInput>
    empresaId?: StringFilter<"Filial"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    clientes?: ClienteListRelationFilter
    produtos?: ProdutoListRelationFilter
    estoque?: EstoqueListRelationFilter
  }, "id" | "cnpj">

  export type FilialOrderByWithAggregationInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
    _count?: FilialCountOrderByAggregateInput
    _max?: FilialMaxOrderByAggregateInput
    _min?: FilialMinOrderByAggregateInput
  }

  export type FilialScalarWhereWithAggregatesInput = {
    AND?: FilialScalarWhereWithAggregatesInput | FilialScalarWhereWithAggregatesInput[]
    OR?: FilialScalarWhereWithAggregatesInput[]
    NOT?: FilialScalarWhereWithAggregatesInput | FilialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Filial"> | string
    razaoSocial?: StringWithAggregatesFilter<"Filial"> | string
    nomeFantasia?: StringWithAggregatesFilter<"Filial"> | string
    cnpj?: StringWithAggregatesFilter<"Filial"> | string
    telefone?: StringNullableWithAggregatesFilter<"Filial"> | string | null
    email?: StringNullableWithAggregatesFilter<"Filial"> | string | null
    empresaId?: StringWithAggregatesFilter<"Filial"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    endereco?: XOR<EnderecoCompositeFilter, EnderecoObjectEqualityInput>
    empresaId?: StringNullableFilter<"Cliente"> | string | null
    filialId?: StringNullableFilter<"Cliente"> | string | null
    empresa?: XOR<EmpresaNullableScalarRelationFilter, EmpresaWhereInput> | null
    filial?: XOR<FilialNullableScalarRelationFilter, FilialWhereInput> | null
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: EnderecoOrderByInput
    empresaId?: SortOrder
    filialId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    filial?: FilialOrderByWithRelationInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    endereco?: XOR<EnderecoCompositeFilter, EnderecoObjectEqualityInput>
    empresaId?: StringNullableFilter<"Cliente"> | string | null
    filialId?: StringNullableFilter<"Cliente"> | string | null
    empresa?: XOR<EmpresaNullableScalarRelationFilter, EmpresaWhereInput> | null
    filial?: XOR<FilialNullableScalarRelationFilter, FilialWhereInput> | null
  }, "id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    empresaId?: SortOrder
    filialId?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    empresaId?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    filialId?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoVenda?: FloatFilter<"Produto"> | number
    precoCompra?: FloatFilter<"Produto"> | number
    undVendaId?: StringFilter<"Produto"> | string
    undCompraId?: StringFilter<"Produto"> | string
    filialId?: StringFilter<"Produto"> | string
    undVenda?: XOR<UnidadeScalarRelationFilter, UnidadeWhereInput>
    undCompra?: XOR<UnidadeScalarRelationFilter, UnidadeWhereInput>
    filial?: XOR<FilialScalarRelationFilter, FilialWhereInput>
    estoque?: EstoqueListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    precoCompra?: SortOrder
    undVendaId?: SortOrder
    undCompraId?: SortOrder
    filialId?: SortOrder
    undVenda?: UnidadeOrderByWithRelationInput
    undCompra?: UnidadeOrderByWithRelationInput
    filial?: FilialOrderByWithRelationInput
    estoque?: EstoqueOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoVenda?: FloatFilter<"Produto"> | number
    precoCompra?: FloatFilter<"Produto"> | number
    undVendaId?: StringFilter<"Produto"> | string
    undCompraId?: StringFilter<"Produto"> | string
    filialId?: StringFilter<"Produto"> | string
    undVenda?: XOR<UnidadeScalarRelationFilter, UnidadeWhereInput>
    undCompra?: XOR<UnidadeScalarRelationFilter, UnidadeWhereInput>
    filial?: XOR<FilialScalarRelationFilter, FilialWhereInput>
    estoque?: EstoqueListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    precoCompra?: SortOrder
    undVendaId?: SortOrder
    undCompraId?: SortOrder
    filialId?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produto"> | string
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringWithAggregatesFilter<"Produto"> | string
    precoVenda?: FloatWithAggregatesFilter<"Produto"> | number
    precoCompra?: FloatWithAggregatesFilter<"Produto"> | number
    undVendaId?: StringWithAggregatesFilter<"Produto"> | string
    undCompraId?: StringWithAggregatesFilter<"Produto"> | string
    filialId?: StringWithAggregatesFilter<"Produto"> | string
  }

  export type EstoqueWhereInput = {
    AND?: EstoqueWhereInput | EstoqueWhereInput[]
    OR?: EstoqueWhereInput[]
    NOT?: EstoqueWhereInput | EstoqueWhereInput[]
    id?: StringFilter<"Estoque"> | string
    quantidade?: FloatFilter<"Estoque"> | number
    filialId?: StringFilter<"Estoque"> | string
    produtoId?: StringFilter<"Estoque"> | string
    filial?: XOR<FilialScalarRelationFilter, FilialWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type EstoqueOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    filialId?: SortOrder
    produtoId?: SortOrder
    filial?: FilialOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type EstoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filialId_produtoId?: EstoqueFilialIdProdutoIdCompoundUniqueInput
    AND?: EstoqueWhereInput | EstoqueWhereInput[]
    OR?: EstoqueWhereInput[]
    NOT?: EstoqueWhereInput | EstoqueWhereInput[]
    quantidade?: FloatFilter<"Estoque"> | number
    filialId?: StringFilter<"Estoque"> | string
    produtoId?: StringFilter<"Estoque"> | string
    filial?: XOR<FilialScalarRelationFilter, FilialWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id" | "filialId_produtoId">

  export type EstoqueOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    filialId?: SortOrder
    produtoId?: SortOrder
    _count?: EstoqueCountOrderByAggregateInput
    _avg?: EstoqueAvgOrderByAggregateInput
    _max?: EstoqueMaxOrderByAggregateInput
    _min?: EstoqueMinOrderByAggregateInput
    _sum?: EstoqueSumOrderByAggregateInput
  }

  export type EstoqueScalarWhereWithAggregatesInput = {
    AND?: EstoqueScalarWhereWithAggregatesInput | EstoqueScalarWhereWithAggregatesInput[]
    OR?: EstoqueScalarWhereWithAggregatesInput[]
    NOT?: EstoqueScalarWhereWithAggregatesInput | EstoqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estoque"> | string
    quantidade?: FloatWithAggregatesFilter<"Estoque"> | number
    filialId?: StringWithAggregatesFilter<"Estoque"> | string
    produtoId?: StringWithAggregatesFilter<"Estoque"> | string
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    nome?: StringNullableFilter<"Usuarios"> | string | null
    email?: StringNullableFilter<"Usuarios"> | string | null
    senha?: StringNullableFilter<"Usuarios"> | string | null
    permissao?: EnumPermissaoFilter<"Usuarios"> | $Enums.Permissao
    empresaId?: StringFilter<"Usuarios"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nome?: StringNullableFilter<"Usuarios"> | string | null
    senha?: StringNullableFilter<"Usuarios"> | string | null
    permissao?: EnumPermissaoFilter<"Usuarios"> | $Enums.Permissao
    empresaId?: StringFilter<"Usuarios"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "email">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    empresaId?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    nome?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    senha?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    permissao?: EnumPermissaoWithAggregatesFilter<"Usuarios"> | $Enums.Permissao
    empresaId?: StringWithAggregatesFilter<"Usuarios"> | string
  }

  export type UnidadeWhereInput = {
    AND?: UnidadeWhereInput | UnidadeWhereInput[]
    OR?: UnidadeWhereInput[]
    NOT?: UnidadeWhereInput | UnidadeWhereInput[]
    id?: StringFilter<"Unidade"> | string
    nome?: StringFilter<"Unidade"> | string
    sigla?: StringFilter<"Unidade"> | string
    produtosVenda?: ProdutoListRelationFilter
    produtosCompra?: ProdutoListRelationFilter
  }

  export type UnidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    produtosVenda?: ProdutoOrderByRelationAggregateInput
    produtosCompra?: ProdutoOrderByRelationAggregateInput
  }

  export type UnidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnidadeWhereInput | UnidadeWhereInput[]
    OR?: UnidadeWhereInput[]
    NOT?: UnidadeWhereInput | UnidadeWhereInput[]
    nome?: StringFilter<"Unidade"> | string
    sigla?: StringFilter<"Unidade"> | string
    produtosVenda?: ProdutoListRelationFilter
    produtosCompra?: ProdutoListRelationFilter
  }, "id">

  export type UnidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    _count?: UnidadeCountOrderByAggregateInput
    _max?: UnidadeMaxOrderByAggregateInput
    _min?: UnidadeMinOrderByAggregateInput
  }

  export type UnidadeScalarWhereWithAggregatesInput = {
    AND?: UnidadeScalarWhereWithAggregatesInput | UnidadeScalarWhereWithAggregatesInput[]
    OR?: UnidadeScalarWhereWithAggregatesInput[]
    NOT?: UnidadeScalarWhereWithAggregatesInput | UnidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unidade"> | string
    nome?: StringWithAggregatesFilter<"Unidade"> | string
    sigla?: StringWithAggregatesFilter<"Unidade"> | string
  }

  export type EmpresaCreateInput = {
    id?: string
    filiais?: FilialCreateNestedManyWithoutEmpresaInput
    Cliente?: ClienteCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    filiais?: FilialUncheckedCreateNestedManyWithoutEmpresaInput
    Cliente?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    filiais?: FilialUpdateManyWithoutEmpresaNestedInput
    Cliente?: ClienteUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    filiais?: FilialUncheckedUpdateManyWithoutEmpresaNestedInput
    Cliente?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
  }

  export type EmpresaUpdateManyMutationInput = {

  }

  export type EmpresaUncheckedUpdateManyInput = {

  }

  export type FilialCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa: EmpresaCreateNestedOneWithoutFiliaisInput
    clientes?: ClienteCreateNestedManyWithoutFilialInput
    produtos?: ProdutoCreateNestedManyWithoutFilialInput
    estoque?: EstoqueCreateNestedManyWithoutFilialInput
  }

  export type FilialUncheckedCreateInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutFilialInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFilialInput
    estoque?: EstoqueUncheckedCreateNestedManyWithoutFilialInput
  }

  export type FilialUpdateInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneRequiredWithoutFiliaisNestedInput
    clientes?: ClienteUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUncheckedUpdateManyWithoutFilialNestedInput
  }

  export type FilialCreateManyInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId: string
  }

  export type FilialUpdateManyMutationInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
  }

  export type FilialUncheckedUpdateManyInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaCreateNestedOneWithoutClienteInput
    filial?: FilialCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId?: string | null
    filialId?: string | null
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneWithoutClienteNestedInput
    filial?: FilialUpdateOneWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
    filialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId?: string | null
    filialId?: string | null
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
  }

  export type ClienteUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
    filialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVenda: UnidadeCreateNestedOneWithoutProdutosVendaInput
    undCompra: UnidadeCreateNestedOneWithoutProdutosCompraInput
    filial: FilialCreateNestedOneWithoutProdutosInput
    estoque?: EstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
    filialId: string
    estoque?: EstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVenda?: UnidadeUpdateOneRequiredWithoutProdutosVendaNestedInput
    undCompra?: UnidadeUpdateOneRequiredWithoutProdutosCompraNestedInput
    filial?: FilialUpdateOneRequiredWithoutProdutosNestedInput
    estoque?: EstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    undCompraId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
    estoque?: EstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
    filialId: string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    undCompraId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueCreateInput = {
    id?: string
    quantidade: number
    filial: FilialCreateNestedOneWithoutEstoqueInput
    produto: ProdutoCreateNestedOneWithoutEstoqueInput
  }

  export type EstoqueUncheckedCreateInput = {
    id?: string
    quantidade: number
    filialId: string
    produtoId: string
  }

  export type EstoqueUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filial?: FilialUpdateOneRequiredWithoutEstoqueNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutEstoqueNestedInput
  }

  export type EstoqueUncheckedUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filialId?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueCreateManyInput = {
    id?: string
    quantidade: number
    filialId: string
    produtoId: string
  }

  export type EstoqueUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type EstoqueUncheckedUpdateManyInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filialId?: StringFieldUpdateOperationsInput | string
    produtoId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
    empresa: EmpresaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
    empresaId: string
  }

  export type UsuariosUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
    empresa?: EmpresaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateManyInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
    empresaId: string
  }

  export type UsuariosUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuariosUncheckedUpdateManyInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadeCreateInput = {
    id?: string
    nome: string
    sigla: string
    produtosVenda?: ProdutoCreateNestedManyWithoutUndVendaInput
    produtosCompra?: ProdutoCreateNestedManyWithoutUndCompraInput
  }

  export type UnidadeUncheckedCreateInput = {
    id?: string
    nome: string
    sigla: string
    produtosVenda?: ProdutoUncheckedCreateNestedManyWithoutUndVendaInput
    produtosCompra?: ProdutoUncheckedCreateNestedManyWithoutUndCompraInput
  }

  export type UnidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosVenda?: ProdutoUpdateManyWithoutUndVendaNestedInput
    produtosCompra?: ProdutoUpdateManyWithoutUndCompraNestedInput
  }

  export type UnidadeUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosVenda?: ProdutoUncheckedUpdateManyWithoutUndVendaNestedInput
    produtosCompra?: ProdutoUncheckedUpdateManyWithoutUndCompraNestedInput
  }

  export type UnidadeCreateManyInput = {
    id?: string
    nome: string
    sigla: string
  }

  export type UnidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadeUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
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

  export type FilialListRelationFilter = {
    every?: FilialWhereInput
    some?: FilialWhereInput
    none?: FilialWhereInput
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type UsuariosListRelationFilter = {
    every?: UsuariosWhereInput
    some?: UsuariosWhereInput
    none?: UsuariosWhereInput
  }

  export type FilialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnderecoCompositeFilter = {
    equals?: EnderecoObjectEqualityInput
    is?: EnderecoWhereInput
    isNot?: EnderecoWhereInput
  }

  export type EnderecoObjectEqualityInput = {
    inscEstadual: string
    rua: string
    numero: number
    bairro: string
    cidade: string
    estado: string
    uf: string
    cep: string
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type EstoqueListRelationFilter = {
    every?: EstoqueWhereInput
    some?: EstoqueWhereInput
    none?: EstoqueWhereInput
  }

  export type EnderecoOrderByInput = {
    inscEstadual?: SortOrder
    rua?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilialCountOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
  }

  export type FilialMaxOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
  }

  export type FilialMinOrderByAggregateInput = {
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
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

  export type EmpresaNullableScalarRelationFilter = {
    is?: EmpresaWhereInput | null
    isNot?: EmpresaWhereInput | null
  }

  export type FilialNullableScalarRelationFilter = {
    is?: FilialWhereInput | null
    isNot?: FilialWhereInput | null
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    empresaId?: SortOrder
    filialId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    empresaId?: SortOrder
    filialId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    empresaId?: SortOrder
    filialId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UnidadeScalarRelationFilter = {
    is?: UnidadeWhereInput
    isNot?: UnidadeWhereInput
  }

  export type FilialScalarRelationFilter = {
    is?: FilialWhereInput
    isNot?: FilialWhereInput
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    precoCompra?: SortOrder
    undVendaId?: SortOrder
    undCompraId?: SortOrder
    filialId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    precoVenda?: SortOrder
    precoCompra?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    precoCompra?: SortOrder
    undVendaId?: SortOrder
    undCompraId?: SortOrder
    filialId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    precoCompra?: SortOrder
    undVendaId?: SortOrder
    undCompraId?: SortOrder
    filialId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    precoVenda?: SortOrder
    precoCompra?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type EstoqueFilialIdProdutoIdCompoundUniqueInput = {
    filialId: string
    produtoId: string
  }

  export type EstoqueCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    filialId?: SortOrder
    produtoId?: SortOrder
  }

  export type EstoqueAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EstoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    filialId?: SortOrder
    produtoId?: SortOrder
  }

  export type EstoqueMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    filialId?: SortOrder
    produtoId?: SortOrder
  }

  export type EstoqueSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EnumPermissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoFilter<$PrismaModel> | $Enums.Permissao
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    empresaId?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    empresaId?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    permissao?: SortOrder
    empresaId?: SortOrder
  }

  export type EnumPermissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoWithAggregatesFilter<$PrismaModel> | $Enums.Permissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoFilter<$PrismaModel>
  }

  export type UnidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type UnidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type UnidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type FilialCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput> | FilialCreateWithoutEmpresaInput[] | FilialUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FilialCreateOrConnectWithoutEmpresaInput | FilialCreateOrConnectWithoutEmpresaInput[]
    createMany?: FilialCreateManyEmpresaInputEnvelope
    connect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
  }

  export type ClienteCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type UsuariosCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput> | UsuariosCreateWithoutEmpresaInput[] | UsuariosUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresaInput | UsuariosCreateOrConnectWithoutEmpresaInput[]
    createMany?: UsuariosCreateManyEmpresaInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type FilialUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput> | FilialCreateWithoutEmpresaInput[] | FilialUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FilialCreateOrConnectWithoutEmpresaInput | FilialCreateOrConnectWithoutEmpresaInput[]
    createMany?: FilialCreateManyEmpresaInputEnvelope
    connect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type UsuariosUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput> | UsuariosCreateWithoutEmpresaInput[] | UsuariosUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresaInput | UsuariosCreateOrConnectWithoutEmpresaInput[]
    createMany?: UsuariosCreateManyEmpresaInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type FilialUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput> | FilialCreateWithoutEmpresaInput[] | FilialUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FilialCreateOrConnectWithoutEmpresaInput | FilialCreateOrConnectWithoutEmpresaInput[]
    upsert?: FilialUpsertWithWhereUniqueWithoutEmpresaInput | FilialUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FilialCreateManyEmpresaInputEnvelope
    set?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    disconnect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    delete?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    connect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    update?: FilialUpdateWithWhereUniqueWithoutEmpresaInput | FilialUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FilialUpdateManyWithWhereWithoutEmpresaInput | FilialUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FilialScalarWhereInput | FilialScalarWhereInput[]
  }

  export type ClienteUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type UsuariosUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput> | UsuariosCreateWithoutEmpresaInput[] | UsuariosUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresaInput | UsuariosCreateOrConnectWithoutEmpresaInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutEmpresaInput | UsuariosUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: UsuariosCreateManyEmpresaInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutEmpresaInput | UsuariosUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutEmpresaInput | UsuariosUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type FilialUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput> | FilialCreateWithoutEmpresaInput[] | FilialUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FilialCreateOrConnectWithoutEmpresaInput | FilialCreateOrConnectWithoutEmpresaInput[]
    upsert?: FilialUpsertWithWhereUniqueWithoutEmpresaInput | FilialUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FilialCreateManyEmpresaInputEnvelope
    set?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    disconnect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    delete?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    connect?: FilialWhereUniqueInput | FilialWhereUniqueInput[]
    update?: FilialUpdateWithWhereUniqueWithoutEmpresaInput | FilialUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FilialUpdateManyWithWhereWithoutEmpresaInput | FilialUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FilialScalarWhereInput | FilialScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput> | ClienteCreateWithoutEmpresaInput[] | ClienteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutEmpresaInput | ClienteCreateOrConnectWithoutEmpresaInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutEmpresaInput | ClienteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ClienteCreateManyEmpresaInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutEmpresaInput | ClienteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutEmpresaInput | ClienteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type UsuariosUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput> | UsuariosCreateWithoutEmpresaInput[] | UsuariosUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutEmpresaInput | UsuariosCreateOrConnectWithoutEmpresaInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutEmpresaInput | UsuariosUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: UsuariosCreateManyEmpresaInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutEmpresaInput | UsuariosUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutEmpresaInput | UsuariosUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type EnderecoCreateEnvelopeInput = {
    set?: EnderecoCreateInput
  }

  export type EnderecoCreateInput = {
    inscEstadual: string
    rua: string
    numero: number
    bairro: string
    cidade: string
    estado: string
    uf: string
    cep: string
  }

  export type EmpresaCreateNestedOneWithoutFiliaisInput = {
    create?: XOR<EmpresaCreateWithoutFiliaisInput, EmpresaUncheckedCreateWithoutFiliaisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFiliaisInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ClienteCreateNestedManyWithoutFilialInput = {
    create?: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput> | ClienteCreateWithoutFilialInput[] | ClienteUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFilialInput | ClienteCreateOrConnectWithoutFilialInput[]
    createMany?: ClienteCreateManyFilialInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutFilialInput = {
    create?: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput> | ProdutoCreateWithoutFilialInput[] | ProdutoUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFilialInput | ProdutoCreateOrConnectWithoutFilialInput[]
    createMany?: ProdutoCreateManyFilialInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type EstoqueCreateNestedManyWithoutFilialInput = {
    create?: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput> | EstoqueCreateWithoutFilialInput[] | EstoqueUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutFilialInput | EstoqueCreateOrConnectWithoutFilialInput[]
    createMany?: EstoqueCreateManyFilialInputEnvelope
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutFilialInput = {
    create?: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput> | ClienteCreateWithoutFilialInput[] | ClienteUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFilialInput | ClienteCreateOrConnectWithoutFilialInput[]
    createMany?: ClienteCreateManyFilialInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutFilialInput = {
    create?: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput> | ProdutoCreateWithoutFilialInput[] | ProdutoUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFilialInput | ProdutoCreateOrConnectWithoutFilialInput[]
    createMany?: ProdutoCreateManyFilialInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type EstoqueUncheckedCreateNestedManyWithoutFilialInput = {
    create?: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput> | EstoqueCreateWithoutFilialInput[] | EstoqueUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutFilialInput | EstoqueCreateOrConnectWithoutFilialInput[]
    createMany?: EstoqueCreateManyFilialInputEnvelope
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnderecoUpdateEnvelopeInput = {
    set?: EnderecoCreateInput
    update?: EnderecoUpdateInput
  }

  export type EmpresaUpdateOneRequiredWithoutFiliaisNestedInput = {
    create?: XOR<EmpresaCreateWithoutFiliaisInput, EmpresaUncheckedCreateWithoutFiliaisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFiliaisInput
    upsert?: EmpresaUpsertWithoutFiliaisInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutFiliaisInput, EmpresaUpdateWithoutFiliaisInput>, EmpresaUncheckedUpdateWithoutFiliaisInput>
  }

  export type ClienteUpdateManyWithoutFilialNestedInput = {
    create?: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput> | ClienteCreateWithoutFilialInput[] | ClienteUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFilialInput | ClienteCreateOrConnectWithoutFilialInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutFilialInput | ClienteUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: ClienteCreateManyFilialInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutFilialInput | ClienteUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutFilialInput | ClienteUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutFilialNestedInput = {
    create?: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput> | ProdutoCreateWithoutFilialInput[] | ProdutoUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFilialInput | ProdutoCreateOrConnectWithoutFilialInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutFilialInput | ProdutoUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: ProdutoCreateManyFilialInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutFilialInput | ProdutoUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutFilialInput | ProdutoUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type EstoqueUpdateManyWithoutFilialNestedInput = {
    create?: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput> | EstoqueCreateWithoutFilialInput[] | EstoqueUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutFilialInput | EstoqueCreateOrConnectWithoutFilialInput[]
    upsert?: EstoqueUpsertWithWhereUniqueWithoutFilialInput | EstoqueUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: EstoqueCreateManyFilialInputEnvelope
    set?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    disconnect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    delete?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    update?: EstoqueUpdateWithWhereUniqueWithoutFilialInput | EstoqueUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: EstoqueUpdateManyWithWhereWithoutFilialInput | EstoqueUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutFilialNestedInput = {
    create?: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput> | ClienteCreateWithoutFilialInput[] | ClienteUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutFilialInput | ClienteCreateOrConnectWithoutFilialInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutFilialInput | ClienteUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: ClienteCreateManyFilialInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutFilialInput | ClienteUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutFilialInput | ClienteUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutFilialNestedInput = {
    create?: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput> | ProdutoCreateWithoutFilialInput[] | ProdutoUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutFilialInput | ProdutoCreateOrConnectWithoutFilialInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutFilialInput | ProdutoUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: ProdutoCreateManyFilialInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutFilialInput | ProdutoUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutFilialInput | ProdutoUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type EstoqueUncheckedUpdateManyWithoutFilialNestedInput = {
    create?: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput> | EstoqueCreateWithoutFilialInput[] | EstoqueUncheckedCreateWithoutFilialInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutFilialInput | EstoqueCreateOrConnectWithoutFilialInput[]
    upsert?: EstoqueUpsertWithWhereUniqueWithoutFilialInput | EstoqueUpsertWithWhereUniqueWithoutFilialInput[]
    createMany?: EstoqueCreateManyFilialInputEnvelope
    set?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    disconnect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    delete?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    update?: EstoqueUpdateWithWhereUniqueWithoutFilialInput | EstoqueUpdateWithWhereUniqueWithoutFilialInput[]
    updateMany?: EstoqueUpdateManyWithWhereWithoutFilialInput | EstoqueUpdateManyWithWhereWithoutFilialInput[]
    deleteMany?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutClienteInput = {
    create?: XOR<EmpresaCreateWithoutClienteInput, EmpresaUncheckedCreateWithoutClienteInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClienteInput
    connect?: EmpresaWhereUniqueInput
  }

  export type FilialCreateNestedOneWithoutClientesInput = {
    create?: XOR<FilialCreateWithoutClientesInput, FilialUncheckedCreateWithoutClientesInput>
    connectOrCreate?: FilialCreateOrConnectWithoutClientesInput
    connect?: FilialWhereUniqueInput
  }

  export type EmpresaUpdateOneWithoutClienteNestedInput = {
    create?: XOR<EmpresaCreateWithoutClienteInput, EmpresaUncheckedCreateWithoutClienteInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutClienteInput
    upsert?: EmpresaUpsertWithoutClienteInput
    disconnect?: boolean
    delete?: EmpresaWhereInput | boolean
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutClienteInput, EmpresaUpdateWithoutClienteInput>, EmpresaUncheckedUpdateWithoutClienteInput>
  }

  export type FilialUpdateOneWithoutClientesNestedInput = {
    create?: XOR<FilialCreateWithoutClientesInput, FilialUncheckedCreateWithoutClientesInput>
    connectOrCreate?: FilialCreateOrConnectWithoutClientesInput
    upsert?: FilialUpsertWithoutClientesInput
    disconnect?: boolean
    delete?: FilialWhereInput | boolean
    connect?: FilialWhereUniqueInput
    update?: XOR<XOR<FilialUpdateToOneWithWhereWithoutClientesInput, FilialUpdateWithoutClientesInput>, FilialUncheckedUpdateWithoutClientesInput>
  }

  export type UnidadeCreateNestedOneWithoutProdutosVendaInput = {
    create?: XOR<UnidadeCreateWithoutProdutosVendaInput, UnidadeUncheckedCreateWithoutProdutosVendaInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutProdutosVendaInput
    connect?: UnidadeWhereUniqueInput
  }

  export type UnidadeCreateNestedOneWithoutProdutosCompraInput = {
    create?: XOR<UnidadeCreateWithoutProdutosCompraInput, UnidadeUncheckedCreateWithoutProdutosCompraInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutProdutosCompraInput
    connect?: UnidadeWhereUniqueInput
  }

  export type FilialCreateNestedOneWithoutProdutosInput = {
    create?: XOR<FilialCreateWithoutProdutosInput, FilialUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: FilialCreateOrConnectWithoutProdutosInput
    connect?: FilialWhereUniqueInput
  }

  export type EstoqueCreateNestedManyWithoutProdutoInput = {
    create?: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput> | EstoqueCreateWithoutProdutoInput[] | EstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput | EstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: EstoqueCreateManyProdutoInputEnvelope
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
  }

  export type EstoqueUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput> | EstoqueCreateWithoutProdutoInput[] | EstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput | EstoqueCreateOrConnectWithoutProdutoInput[]
    createMany?: EstoqueCreateManyProdutoInputEnvelope
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnidadeUpdateOneRequiredWithoutProdutosVendaNestedInput = {
    create?: XOR<UnidadeCreateWithoutProdutosVendaInput, UnidadeUncheckedCreateWithoutProdutosVendaInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutProdutosVendaInput
    upsert?: UnidadeUpsertWithoutProdutosVendaInput
    connect?: UnidadeWhereUniqueInput
    update?: XOR<XOR<UnidadeUpdateToOneWithWhereWithoutProdutosVendaInput, UnidadeUpdateWithoutProdutosVendaInput>, UnidadeUncheckedUpdateWithoutProdutosVendaInput>
  }

  export type UnidadeUpdateOneRequiredWithoutProdutosCompraNestedInput = {
    create?: XOR<UnidadeCreateWithoutProdutosCompraInput, UnidadeUncheckedCreateWithoutProdutosCompraInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutProdutosCompraInput
    upsert?: UnidadeUpsertWithoutProdutosCompraInput
    connect?: UnidadeWhereUniqueInput
    update?: XOR<XOR<UnidadeUpdateToOneWithWhereWithoutProdutosCompraInput, UnidadeUpdateWithoutProdutosCompraInput>, UnidadeUncheckedUpdateWithoutProdutosCompraInput>
  }

  export type FilialUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<FilialCreateWithoutProdutosInput, FilialUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: FilialCreateOrConnectWithoutProdutosInput
    upsert?: FilialUpsertWithoutProdutosInput
    connect?: FilialWhereUniqueInput
    update?: XOR<XOR<FilialUpdateToOneWithWhereWithoutProdutosInput, FilialUpdateWithoutProdutosInput>, FilialUncheckedUpdateWithoutProdutosInput>
  }

  export type EstoqueUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput> | EstoqueCreateWithoutProdutoInput[] | EstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput | EstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: EstoqueUpsertWithWhereUniqueWithoutProdutoInput | EstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: EstoqueCreateManyProdutoInputEnvelope
    set?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    disconnect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    delete?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    update?: EstoqueUpdateWithWhereUniqueWithoutProdutoInput | EstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: EstoqueUpdateManyWithWhereWithoutProdutoInput | EstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
  }

  export type EstoqueUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput> | EstoqueCreateWithoutProdutoInput[] | EstoqueUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoqueCreateOrConnectWithoutProdutoInput | EstoqueCreateOrConnectWithoutProdutoInput[]
    upsert?: EstoqueUpsertWithWhereUniqueWithoutProdutoInput | EstoqueUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: EstoqueCreateManyProdutoInputEnvelope
    set?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    disconnect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    delete?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    connect?: EstoqueWhereUniqueInput | EstoqueWhereUniqueInput[]
    update?: EstoqueUpdateWithWhereUniqueWithoutProdutoInput | EstoqueUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: EstoqueUpdateManyWithWhereWithoutProdutoInput | EstoqueUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
  }

  export type FilialCreateNestedOneWithoutEstoqueInput = {
    create?: XOR<FilialCreateWithoutEstoqueInput, FilialUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: FilialCreateOrConnectWithoutEstoqueInput
    connect?: FilialWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutEstoqueInput = {
    create?: XOR<ProdutoCreateWithoutEstoqueInput, ProdutoUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstoqueInput
    connect?: ProdutoWhereUniqueInput
  }

  export type FilialUpdateOneRequiredWithoutEstoqueNestedInput = {
    create?: XOR<FilialCreateWithoutEstoqueInput, FilialUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: FilialCreateOrConnectWithoutEstoqueInput
    upsert?: FilialUpsertWithoutEstoqueInput
    connect?: FilialWhereUniqueInput
    update?: XOR<XOR<FilialUpdateToOneWithWhereWithoutEstoqueInput, FilialUpdateWithoutEstoqueInput>, FilialUncheckedUpdateWithoutEstoqueInput>
  }

  export type ProdutoUpdateOneRequiredWithoutEstoqueNestedInput = {
    create?: XOR<ProdutoCreateWithoutEstoqueInput, ProdutoUncheckedCreateWithoutEstoqueInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstoqueInput
    upsert?: ProdutoUpsertWithoutEstoqueInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutEstoqueInput, ProdutoUpdateWithoutEstoqueInput>, ProdutoUncheckedUpdateWithoutEstoqueInput>
  }

  export type EmpresaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuariosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EnumPermissaoFieldUpdateOperationsInput = {
    set?: $Enums.Permissao
  }

  export type EmpresaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuariosInput
    upsert?: EmpresaUpsertWithoutUsuariosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutUsuariosInput, EmpresaUpdateWithoutUsuariosInput>, EmpresaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ProdutoCreateNestedManyWithoutUndVendaInput = {
    create?: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput> | ProdutoCreateWithoutUndVendaInput[] | ProdutoUncheckedCreateWithoutUndVendaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndVendaInput | ProdutoCreateOrConnectWithoutUndVendaInput[]
    createMany?: ProdutoCreateManyUndVendaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutUndCompraInput = {
    create?: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput> | ProdutoCreateWithoutUndCompraInput[] | ProdutoUncheckedCreateWithoutUndCompraInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndCompraInput | ProdutoCreateOrConnectWithoutUndCompraInput[]
    createMany?: ProdutoCreateManyUndCompraInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutUndVendaInput = {
    create?: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput> | ProdutoCreateWithoutUndVendaInput[] | ProdutoUncheckedCreateWithoutUndVendaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndVendaInput | ProdutoCreateOrConnectWithoutUndVendaInput[]
    createMany?: ProdutoCreateManyUndVendaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutUndCompraInput = {
    create?: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput> | ProdutoCreateWithoutUndCompraInput[] | ProdutoUncheckedCreateWithoutUndCompraInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndCompraInput | ProdutoCreateOrConnectWithoutUndCompraInput[]
    createMany?: ProdutoCreateManyUndCompraInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUpdateManyWithoutUndVendaNestedInput = {
    create?: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput> | ProdutoCreateWithoutUndVendaInput[] | ProdutoUncheckedCreateWithoutUndVendaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndVendaInput | ProdutoCreateOrConnectWithoutUndVendaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutUndVendaInput | ProdutoUpsertWithWhereUniqueWithoutUndVendaInput[]
    createMany?: ProdutoCreateManyUndVendaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutUndVendaInput | ProdutoUpdateWithWhereUniqueWithoutUndVendaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutUndVendaInput | ProdutoUpdateManyWithWhereWithoutUndVendaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutUndCompraNestedInput = {
    create?: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput> | ProdutoCreateWithoutUndCompraInput[] | ProdutoUncheckedCreateWithoutUndCompraInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndCompraInput | ProdutoCreateOrConnectWithoutUndCompraInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutUndCompraInput | ProdutoUpsertWithWhereUniqueWithoutUndCompraInput[]
    createMany?: ProdutoCreateManyUndCompraInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutUndCompraInput | ProdutoUpdateWithWhereUniqueWithoutUndCompraInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutUndCompraInput | ProdutoUpdateManyWithWhereWithoutUndCompraInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutUndVendaNestedInput = {
    create?: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput> | ProdutoCreateWithoutUndVendaInput[] | ProdutoUncheckedCreateWithoutUndVendaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndVendaInput | ProdutoCreateOrConnectWithoutUndVendaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutUndVendaInput | ProdutoUpsertWithWhereUniqueWithoutUndVendaInput[]
    createMany?: ProdutoCreateManyUndVendaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutUndVendaInput | ProdutoUpdateWithWhereUniqueWithoutUndVendaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutUndVendaInput | ProdutoUpdateManyWithWhereWithoutUndVendaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutUndCompraNestedInput = {
    create?: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput> | ProdutoCreateWithoutUndCompraInput[] | ProdutoUncheckedCreateWithoutUndCompraInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutUndCompraInput | ProdutoCreateOrConnectWithoutUndCompraInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutUndCompraInput | ProdutoUpsertWithWhereUniqueWithoutUndCompraInput[]
    createMany?: ProdutoCreateManyUndCompraInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutUndCompraInput | ProdutoUpdateWithWhereUniqueWithoutUndCompraInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutUndCompraInput | ProdutoUpdateManyWithWhereWithoutUndCompraInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
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

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    inscEstadual?: StringFilter<"Endereco"> | string
    rua?: StringFilter<"Endereco"> | string
    numero?: IntFilter<"Endereco"> | number
    bairro?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    uf?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPermissaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoFilter<$PrismaModel> | $Enums.Permissao
  }

  export type NestedEnumPermissaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permissao | EnumPermissaoFieldRefInput<$PrismaModel>
    in?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permissao[] | ListEnumPermissaoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissaoWithAggregatesFilter<$PrismaModel> | $Enums.Permissao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissaoFilter<$PrismaModel>
    _max?: NestedEnumPermissaoFilter<$PrismaModel>
  }

  export type FilialCreateWithoutEmpresaInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    clientes?: ClienteCreateNestedManyWithoutFilialInput
    produtos?: ProdutoCreateNestedManyWithoutFilialInput
    estoque?: EstoqueCreateNestedManyWithoutFilialInput
  }

  export type FilialUncheckedCreateWithoutEmpresaInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    clientes?: ClienteUncheckedCreateNestedManyWithoutFilialInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFilialInput
    estoque?: EstoqueUncheckedCreateNestedManyWithoutFilialInput
  }

  export type FilialCreateOrConnectWithoutEmpresaInput = {
    where: FilialWhereUniqueInput
    create: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput>
  }

  export type FilialCreateManyEmpresaInputEnvelope = {
    data: FilialCreateManyEmpresaInput | FilialCreateManyEmpresaInput[]
  }

  export type ClienteCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    filial?: FilialCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    filialId?: string | null
  }

  export type ClienteCreateOrConnectWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteCreateManyEmpresaInputEnvelope = {
    data: ClienteCreateManyEmpresaInput | ClienteCreateManyEmpresaInput[]
  }

  export type UsuariosCreateWithoutEmpresaInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
  }

  export type UsuariosUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
  }

  export type UsuariosCreateOrConnectWithoutEmpresaInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput>
  }

  export type UsuariosCreateManyEmpresaInputEnvelope = {
    data: UsuariosCreateManyEmpresaInput | UsuariosCreateManyEmpresaInput[]
  }

  export type FilialUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: FilialWhereUniqueInput
    update: XOR<FilialUpdateWithoutEmpresaInput, FilialUncheckedUpdateWithoutEmpresaInput>
    create: XOR<FilialCreateWithoutEmpresaInput, FilialUncheckedCreateWithoutEmpresaInput>
  }

  export type FilialUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: FilialWhereUniqueInput
    data: XOR<FilialUpdateWithoutEmpresaInput, FilialUncheckedUpdateWithoutEmpresaInput>
  }

  export type FilialUpdateManyWithWhereWithoutEmpresaInput = {
    where: FilialScalarWhereInput
    data: XOR<FilialUpdateManyMutationInput, FilialUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type FilialScalarWhereInput = {
    AND?: FilialScalarWhereInput | FilialScalarWhereInput[]
    OR?: FilialScalarWhereInput[]
    NOT?: FilialScalarWhereInput | FilialScalarWhereInput[]
    id?: StringFilter<"Filial"> | string
    razaoSocial?: StringFilter<"Filial"> | string
    nomeFantasia?: StringFilter<"Filial"> | string
    cnpj?: StringFilter<"Filial"> | string
    telefone?: StringNullableFilter<"Filial"> | string | null
    email?: StringNullableFilter<"Filial"> | string | null
    empresaId?: StringFilter<"Filial"> | string
  }

  export type ClienteUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ClienteCreateWithoutEmpresaInput, ClienteUncheckedCreateWithoutEmpresaInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutEmpresaInput, ClienteUncheckedUpdateWithoutEmpresaInput>
  }

  export type ClienteUpdateManyWithWhereWithoutEmpresaInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    empresaId?: StringNullableFilter<"Cliente"> | string | null
    filialId?: StringNullableFilter<"Cliente"> | string | null
  }

  export type UsuariosUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: UsuariosWhereUniqueInput
    update: XOR<UsuariosUpdateWithoutEmpresaInput, UsuariosUncheckedUpdateWithoutEmpresaInput>
    create: XOR<UsuariosCreateWithoutEmpresaInput, UsuariosUncheckedCreateWithoutEmpresaInput>
  }

  export type UsuariosUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: UsuariosWhereUniqueInput
    data: XOR<UsuariosUpdateWithoutEmpresaInput, UsuariosUncheckedUpdateWithoutEmpresaInput>
  }

  export type UsuariosUpdateManyWithWhereWithoutEmpresaInput = {
    where: UsuariosScalarWhereInput
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type UsuariosScalarWhereInput = {
    AND?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    OR?: UsuariosScalarWhereInput[]
    NOT?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    nome?: StringNullableFilter<"Usuarios"> | string | null
    email?: StringNullableFilter<"Usuarios"> | string | null
    senha?: StringNullableFilter<"Usuarios"> | string | null
    permissao?: EnumPermissaoFilter<"Usuarios"> | $Enums.Permissao
    empresaId?: StringFilter<"Usuarios"> | string
  }

  export type EmpresaCreateWithoutFiliaisInput = {
    id?: string
    Cliente?: ClienteCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutFiliaisInput = {
    id?: string
    Cliente?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutFiliaisInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutFiliaisInput, EmpresaUncheckedCreateWithoutFiliaisInput>
  }

  export type ClienteCreateWithoutFilialInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaCreateNestedOneWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFilialInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId?: string | null
  }

  export type ClienteCreateOrConnectWithoutFilialInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput>
  }

  export type ClienteCreateManyFilialInputEnvelope = {
    data: ClienteCreateManyFilialInput | ClienteCreateManyFilialInput[]
  }

  export type ProdutoCreateWithoutFilialInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVenda: UnidadeCreateNestedOneWithoutProdutosVendaInput
    undCompra: UnidadeCreateNestedOneWithoutProdutosCompraInput
    estoque?: EstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutFilialInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
    estoque?: EstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutFilialInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput>
  }

  export type ProdutoCreateManyFilialInputEnvelope = {
    data: ProdutoCreateManyFilialInput | ProdutoCreateManyFilialInput[]
  }

  export type EstoqueCreateWithoutFilialInput = {
    id?: string
    quantidade: number
    produto: ProdutoCreateNestedOneWithoutEstoqueInput
  }

  export type EstoqueUncheckedCreateWithoutFilialInput = {
    id?: string
    quantidade: number
    produtoId: string
  }

  export type EstoqueCreateOrConnectWithoutFilialInput = {
    where: EstoqueWhereUniqueInput
    create: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput>
  }

  export type EstoqueCreateManyFilialInputEnvelope = {
    data: EstoqueCreateManyFilialInput | EstoqueCreateManyFilialInput[]
  }

  export type EnderecoUpdateInput = {
    inscEstadual?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUpsertWithoutFiliaisInput = {
    update: XOR<EmpresaUpdateWithoutFiliaisInput, EmpresaUncheckedUpdateWithoutFiliaisInput>
    create: XOR<EmpresaCreateWithoutFiliaisInput, EmpresaUncheckedCreateWithoutFiliaisInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutFiliaisInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutFiliaisInput, EmpresaUncheckedUpdateWithoutFiliaisInput>
  }

  export type EmpresaUpdateWithoutFiliaisInput = {
    Cliente?: ClienteUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutFiliaisInput = {
    Cliente?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ClienteUpsertWithWhereUniqueWithoutFilialInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutFilialInput, ClienteUncheckedUpdateWithoutFilialInput>
    create: XOR<ClienteCreateWithoutFilialInput, ClienteUncheckedCreateWithoutFilialInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutFilialInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutFilialInput, ClienteUncheckedUpdateWithoutFilialInput>
  }

  export type ClienteUpdateManyWithWhereWithoutFilialInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutFilialInput>
  }

  export type ProdutoUpsertWithWhereUniqueWithoutFilialInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutFilialInput, ProdutoUncheckedUpdateWithoutFilialInput>
    create: XOR<ProdutoCreateWithoutFilialInput, ProdutoUncheckedCreateWithoutFilialInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutFilialInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutFilialInput, ProdutoUncheckedUpdateWithoutFilialInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutFilialInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutFilialInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    descricao?: StringFilter<"Produto"> | string
    precoVenda?: FloatFilter<"Produto"> | number
    precoCompra?: FloatFilter<"Produto"> | number
    undVendaId?: StringFilter<"Produto"> | string
    undCompraId?: StringFilter<"Produto"> | string
    filialId?: StringFilter<"Produto"> | string
  }

  export type EstoqueUpsertWithWhereUniqueWithoutFilialInput = {
    where: EstoqueWhereUniqueInput
    update: XOR<EstoqueUpdateWithoutFilialInput, EstoqueUncheckedUpdateWithoutFilialInput>
    create: XOR<EstoqueCreateWithoutFilialInput, EstoqueUncheckedCreateWithoutFilialInput>
  }

  export type EstoqueUpdateWithWhereUniqueWithoutFilialInput = {
    where: EstoqueWhereUniqueInput
    data: XOR<EstoqueUpdateWithoutFilialInput, EstoqueUncheckedUpdateWithoutFilialInput>
  }

  export type EstoqueUpdateManyWithWhereWithoutFilialInput = {
    where: EstoqueScalarWhereInput
    data: XOR<EstoqueUpdateManyMutationInput, EstoqueUncheckedUpdateManyWithoutFilialInput>
  }

  export type EstoqueScalarWhereInput = {
    AND?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
    OR?: EstoqueScalarWhereInput[]
    NOT?: EstoqueScalarWhereInput | EstoqueScalarWhereInput[]
    id?: StringFilter<"Estoque"> | string
    quantidade?: FloatFilter<"Estoque"> | number
    filialId?: StringFilter<"Estoque"> | string
    produtoId?: StringFilter<"Estoque"> | string
  }

  export type EmpresaCreateWithoutClienteInput = {
    id?: string
    filiais?: FilialCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutClienteInput = {
    id?: string
    filiais?: FilialUncheckedCreateNestedManyWithoutEmpresaInput
    usuarios?: UsuariosUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutClienteInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutClienteInput, EmpresaUncheckedCreateWithoutClienteInput>
  }

  export type FilialCreateWithoutClientesInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa: EmpresaCreateNestedOneWithoutFiliaisInput
    produtos?: ProdutoCreateNestedManyWithoutFilialInput
    estoque?: EstoqueCreateNestedManyWithoutFilialInput
  }

  export type FilialUncheckedCreateWithoutClientesInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId: string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFilialInput
    estoque?: EstoqueUncheckedCreateNestedManyWithoutFilialInput
  }

  export type FilialCreateOrConnectWithoutClientesInput = {
    where: FilialWhereUniqueInput
    create: XOR<FilialCreateWithoutClientesInput, FilialUncheckedCreateWithoutClientesInput>
  }

  export type EmpresaUpsertWithoutClienteInput = {
    update: XOR<EmpresaUpdateWithoutClienteInput, EmpresaUncheckedUpdateWithoutClienteInput>
    create: XOR<EmpresaCreateWithoutClienteInput, EmpresaUncheckedCreateWithoutClienteInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutClienteInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutClienteInput, EmpresaUncheckedUpdateWithoutClienteInput>
  }

  export type EmpresaUpdateWithoutClienteInput = {
    filiais?: FilialUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutClienteInput = {
    filiais?: FilialUncheckedUpdateManyWithoutEmpresaNestedInput
    usuarios?: UsuariosUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type FilialUpsertWithoutClientesInput = {
    update: XOR<FilialUpdateWithoutClientesInput, FilialUncheckedUpdateWithoutClientesInput>
    create: XOR<FilialCreateWithoutClientesInput, FilialUncheckedCreateWithoutClientesInput>
    where?: FilialWhereInput
  }

  export type FilialUpdateToOneWithWhereWithoutClientesInput = {
    where?: FilialWhereInput
    data: XOR<FilialUpdateWithoutClientesInput, FilialUncheckedUpdateWithoutClientesInput>
  }

  export type FilialUpdateWithoutClientesInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneRequiredWithoutFiliaisNestedInput
    produtos?: ProdutoUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateWithoutClientesInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: StringFieldUpdateOperationsInput | string
    produtos?: ProdutoUncheckedUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUncheckedUpdateManyWithoutFilialNestedInput
  }

  export type UnidadeCreateWithoutProdutosVendaInput = {
    id?: string
    nome: string
    sigla: string
    produtosCompra?: ProdutoCreateNestedManyWithoutUndCompraInput
  }

  export type UnidadeUncheckedCreateWithoutProdutosVendaInput = {
    id?: string
    nome: string
    sigla: string
    produtosCompra?: ProdutoUncheckedCreateNestedManyWithoutUndCompraInput
  }

  export type UnidadeCreateOrConnectWithoutProdutosVendaInput = {
    where: UnidadeWhereUniqueInput
    create: XOR<UnidadeCreateWithoutProdutosVendaInput, UnidadeUncheckedCreateWithoutProdutosVendaInput>
  }

  export type UnidadeCreateWithoutProdutosCompraInput = {
    id?: string
    nome: string
    sigla: string
    produtosVenda?: ProdutoCreateNestedManyWithoutUndVendaInput
  }

  export type UnidadeUncheckedCreateWithoutProdutosCompraInput = {
    id?: string
    nome: string
    sigla: string
    produtosVenda?: ProdutoUncheckedCreateNestedManyWithoutUndVendaInput
  }

  export type UnidadeCreateOrConnectWithoutProdutosCompraInput = {
    where: UnidadeWhereUniqueInput
    create: XOR<UnidadeCreateWithoutProdutosCompraInput, UnidadeUncheckedCreateWithoutProdutosCompraInput>
  }

  export type FilialCreateWithoutProdutosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa: EmpresaCreateNestedOneWithoutFiliaisInput
    clientes?: ClienteCreateNestedManyWithoutFilialInput
    estoque?: EstoqueCreateNestedManyWithoutFilialInput
  }

  export type FilialUncheckedCreateWithoutProdutosInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutFilialInput
    estoque?: EstoqueUncheckedCreateNestedManyWithoutFilialInput
  }

  export type FilialCreateOrConnectWithoutProdutosInput = {
    where: FilialWhereUniqueInput
    create: XOR<FilialCreateWithoutProdutosInput, FilialUncheckedCreateWithoutProdutosInput>
  }

  export type EstoqueCreateWithoutProdutoInput = {
    id?: string
    quantidade: number
    filial: FilialCreateNestedOneWithoutEstoqueInput
  }

  export type EstoqueUncheckedCreateWithoutProdutoInput = {
    id?: string
    quantidade: number
    filialId: string
  }

  export type EstoqueCreateOrConnectWithoutProdutoInput = {
    where: EstoqueWhereUniqueInput
    create: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type EstoqueCreateManyProdutoInputEnvelope = {
    data: EstoqueCreateManyProdutoInput | EstoqueCreateManyProdutoInput[]
  }

  export type UnidadeUpsertWithoutProdutosVendaInput = {
    update: XOR<UnidadeUpdateWithoutProdutosVendaInput, UnidadeUncheckedUpdateWithoutProdutosVendaInput>
    create: XOR<UnidadeCreateWithoutProdutosVendaInput, UnidadeUncheckedCreateWithoutProdutosVendaInput>
    where?: UnidadeWhereInput
  }

  export type UnidadeUpdateToOneWithWhereWithoutProdutosVendaInput = {
    where?: UnidadeWhereInput
    data: XOR<UnidadeUpdateWithoutProdutosVendaInput, UnidadeUncheckedUpdateWithoutProdutosVendaInput>
  }

  export type UnidadeUpdateWithoutProdutosVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosCompra?: ProdutoUpdateManyWithoutUndCompraNestedInput
  }

  export type UnidadeUncheckedUpdateWithoutProdutosVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosCompra?: ProdutoUncheckedUpdateManyWithoutUndCompraNestedInput
  }

  export type UnidadeUpsertWithoutProdutosCompraInput = {
    update: XOR<UnidadeUpdateWithoutProdutosCompraInput, UnidadeUncheckedUpdateWithoutProdutosCompraInput>
    create: XOR<UnidadeCreateWithoutProdutosCompraInput, UnidadeUncheckedCreateWithoutProdutosCompraInput>
    where?: UnidadeWhereInput
  }

  export type UnidadeUpdateToOneWithWhereWithoutProdutosCompraInput = {
    where?: UnidadeWhereInput
    data: XOR<UnidadeUpdateWithoutProdutosCompraInput, UnidadeUncheckedUpdateWithoutProdutosCompraInput>
  }

  export type UnidadeUpdateWithoutProdutosCompraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosVenda?: ProdutoUpdateManyWithoutUndVendaNestedInput
  }

  export type UnidadeUncheckedUpdateWithoutProdutosCompraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    produtosVenda?: ProdutoUncheckedUpdateManyWithoutUndVendaNestedInput
  }

  export type FilialUpsertWithoutProdutosInput = {
    update: XOR<FilialUpdateWithoutProdutosInput, FilialUncheckedUpdateWithoutProdutosInput>
    create: XOR<FilialCreateWithoutProdutosInput, FilialUncheckedCreateWithoutProdutosInput>
    where?: FilialWhereInput
  }

  export type FilialUpdateToOneWithWhereWithoutProdutosInput = {
    where?: FilialWhereInput
    data: XOR<FilialUpdateWithoutProdutosInput, FilialUncheckedUpdateWithoutProdutosInput>
  }

  export type FilialUpdateWithoutProdutosInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneRequiredWithoutFiliaisNestedInput
    clientes?: ClienteUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateWithoutProdutosInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUncheckedUpdateManyWithoutFilialNestedInput
  }

  export type EstoqueUpsertWithWhereUniqueWithoutProdutoInput = {
    where: EstoqueWhereUniqueInput
    update: XOR<EstoqueUpdateWithoutProdutoInput, EstoqueUncheckedUpdateWithoutProdutoInput>
    create: XOR<EstoqueCreateWithoutProdutoInput, EstoqueUncheckedCreateWithoutProdutoInput>
  }

  export type EstoqueUpdateWithWhereUniqueWithoutProdutoInput = {
    where: EstoqueWhereUniqueInput
    data: XOR<EstoqueUpdateWithoutProdutoInput, EstoqueUncheckedUpdateWithoutProdutoInput>
  }

  export type EstoqueUpdateManyWithWhereWithoutProdutoInput = {
    where: EstoqueScalarWhereInput
    data: XOR<EstoqueUpdateManyMutationInput, EstoqueUncheckedUpdateManyWithoutProdutoInput>
  }

  export type FilialCreateWithoutEstoqueInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresa: EmpresaCreateNestedOneWithoutFiliaisInput
    clientes?: ClienteCreateNestedManyWithoutFilialInput
    produtos?: ProdutoCreateNestedManyWithoutFilialInput
  }

  export type FilialUncheckedCreateWithoutEstoqueInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutFilialInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutFilialInput
  }

  export type FilialCreateOrConnectWithoutEstoqueInput = {
    where: FilialWhereUniqueInput
    create: XOR<FilialCreateWithoutEstoqueInput, FilialUncheckedCreateWithoutEstoqueInput>
  }

  export type ProdutoCreateWithoutEstoqueInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVenda: UnidadeCreateNestedOneWithoutProdutosVendaInput
    undCompra: UnidadeCreateNestedOneWithoutProdutosCompraInput
    filial: FilialCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutEstoqueInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
    filialId: string
  }

  export type ProdutoCreateOrConnectWithoutEstoqueInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutEstoqueInput, ProdutoUncheckedCreateWithoutEstoqueInput>
  }

  export type FilialUpsertWithoutEstoqueInput = {
    update: XOR<FilialUpdateWithoutEstoqueInput, FilialUncheckedUpdateWithoutEstoqueInput>
    create: XOR<FilialCreateWithoutEstoqueInput, FilialUncheckedCreateWithoutEstoqueInput>
    where?: FilialWhereInput
  }

  export type FilialUpdateToOneWithWhereWithoutEstoqueInput = {
    where?: FilialWhereInput
    data: XOR<FilialUpdateWithoutEstoqueInput, FilialUncheckedUpdateWithoutEstoqueInput>
  }

  export type FilialUpdateWithoutEstoqueInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneRequiredWithoutFiliaisNestedInput
    clientes?: ClienteUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateWithoutEstoqueInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutFilialNestedInput
  }

  export type ProdutoUpsertWithoutEstoqueInput = {
    update: XOR<ProdutoUpdateWithoutEstoqueInput, ProdutoUncheckedUpdateWithoutEstoqueInput>
    create: XOR<ProdutoCreateWithoutEstoqueInput, ProdutoUncheckedCreateWithoutEstoqueInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutEstoqueInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutEstoqueInput, ProdutoUncheckedUpdateWithoutEstoqueInput>
  }

  export type ProdutoUpdateWithoutEstoqueInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVenda?: UnidadeUpdateOneRequiredWithoutProdutosVendaNestedInput
    undCompra?: UnidadeUpdateOneRequiredWithoutProdutosCompraNestedInput
    filial?: FilialUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutEstoqueInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    undCompraId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaCreateWithoutUsuariosInput = {
    id?: string
    filiais?: FilialCreateNestedManyWithoutEmpresaInput
    Cliente?: ClienteCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    filiais?: FilialUncheckedCreateNestedManyWithoutEmpresaInput
    Cliente?: ClienteUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutUsuariosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
  }

  export type EmpresaUpsertWithoutUsuariosInput = {
    update: XOR<EmpresaUpdateWithoutUsuariosInput, EmpresaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutUsuariosInput, EmpresaUncheckedUpdateWithoutUsuariosInput>
  }

  export type EmpresaUpdateWithoutUsuariosInput = {
    filiais?: FilialUpdateManyWithoutEmpresaNestedInput
    Cliente?: ClienteUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutUsuariosInput = {
    filiais?: FilialUncheckedUpdateManyWithoutEmpresaNestedInput
    Cliente?: ClienteUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ProdutoCreateWithoutUndVendaInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undCompra: UnidadeCreateNestedOneWithoutProdutosCompraInput
    filial: FilialCreateNestedOneWithoutProdutosInput
    estoque?: EstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutUndVendaInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undCompraId: string
    filialId: string
    estoque?: EstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutUndVendaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput>
  }

  export type ProdutoCreateManyUndVendaInputEnvelope = {
    data: ProdutoCreateManyUndVendaInput | ProdutoCreateManyUndVendaInput[]
  }

  export type ProdutoCreateWithoutUndCompraInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVenda: UnidadeCreateNestedOneWithoutProdutosVendaInput
    filial: FilialCreateNestedOneWithoutProdutosInput
    estoque?: EstoqueCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutUndCompraInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    filialId: string
    estoque?: EstoqueUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutUndCompraInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput>
  }

  export type ProdutoCreateManyUndCompraInputEnvelope = {
    data: ProdutoCreateManyUndCompraInput | ProdutoCreateManyUndCompraInput[]
  }

  export type ProdutoUpsertWithWhereUniqueWithoutUndVendaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutUndVendaInput, ProdutoUncheckedUpdateWithoutUndVendaInput>
    create: XOR<ProdutoCreateWithoutUndVendaInput, ProdutoUncheckedCreateWithoutUndVendaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutUndVendaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutUndVendaInput, ProdutoUncheckedUpdateWithoutUndVendaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutUndVendaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutUndVendaInput>
  }

  export type ProdutoUpsertWithWhereUniqueWithoutUndCompraInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutUndCompraInput, ProdutoUncheckedUpdateWithoutUndCompraInput>
    create: XOR<ProdutoCreateWithoutUndCompraInput, ProdutoUncheckedCreateWithoutUndCompraInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutUndCompraInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutUndCompraInput, ProdutoUncheckedUpdateWithoutUndCompraInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutUndCompraInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutUndCompraInput>
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

  export type FilialCreateManyEmpresaInput = {
    id?: string
    razaoSocial: string
    nomeFantasia: string
    cnpj: string
    telefone?: string | null
    email?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
  }

  export type ClienteCreateManyEmpresaInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    filialId?: string | null
  }

  export type UsuariosCreateManyEmpresaInput = {
    id?: string
    nome?: string | null
    email?: string | null
    senha?: string | null
    permissao: $Enums.Permissao
  }

  export type FilialUpdateWithoutEmpresaInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    clientes?: ClienteUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateWithoutEmpresaInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    clientes?: ClienteUncheckedUpdateManyWithoutFilialNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutFilialNestedInput
    estoque?: EstoqueUncheckedUpdateManyWithoutFilialNestedInput
  }

  export type FilialUncheckedUpdateManyWithoutEmpresaInput = {
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
  }

  export type ClienteUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    filial?: FilialUpdateOneWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    filialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    filialId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUpdateWithoutEmpresaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuariosUncheckedUpdateWithoutEmpresaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type UsuariosUncheckedUpdateManyWithoutEmpresaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: EnumPermissaoFieldUpdateOperationsInput | $Enums.Permissao
  }

  export type ClienteCreateManyFilialInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    endereco: XOR<EnderecoCreateEnvelopeInput, EnderecoCreateInput>
    empresaId?: string | null
  }

  export type ProdutoCreateManyFilialInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    undCompraId: string
  }

  export type EstoqueCreateManyFilialInput = {
    id?: string
    quantidade: number
    produtoId: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresa?: EmpresaUpdateOneWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: XOR<EnderecoUpdateEnvelopeInput, EnderecoCreateInput>
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUpdateWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVenda?: UnidadeUpdateOneRequiredWithoutProdutosVendaNestedInput
    undCompra?: UnidadeUpdateOneRequiredWithoutProdutosCompraNestedInput
    estoque?: EstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    undCompraId?: StringFieldUpdateOperationsInput | string
    estoque?: EstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutFilialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    undCompraId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueUpdateWithoutFilialInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoUpdateOneRequiredWithoutEstoqueNestedInput
  }

  export type EstoqueUncheckedUpdateWithoutFilialInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    produtoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueUncheckedUpdateManyWithoutFilialInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    produtoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueCreateManyProdutoInput = {
    id?: string
    quantidade: number
    filialId: string
  }

  export type EstoqueUpdateWithoutProdutoInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filial?: FilialUpdateOneRequiredWithoutEstoqueNestedInput
  }

  export type EstoqueUncheckedUpdateWithoutProdutoInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filialId?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueUncheckedUpdateManyWithoutProdutoInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    filialId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateManyUndVendaInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undCompraId: string
    filialId: string
  }

  export type ProdutoCreateManyUndCompraInput = {
    id?: string
    nome: string
    descricao: string
    precoVenda: number
    precoCompra: number
    undVendaId: string
    filialId: string
  }

  export type ProdutoUpdateWithoutUndVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undCompra?: UnidadeUpdateOneRequiredWithoutProdutosCompraNestedInput
    filial?: FilialUpdateOneRequiredWithoutProdutosNestedInput
    estoque?: EstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutUndVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undCompraId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
    estoque?: EstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutUndVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undCompraId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUpdateWithoutUndCompraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVenda?: UnidadeUpdateOneRequiredWithoutProdutosVendaNestedInput
    filial?: FilialUpdateOneRequiredWithoutProdutosNestedInput
    estoque?: EstoqueUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutUndCompraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
    estoque?: EstoqueUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutUndCompraInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoVenda?: FloatFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    undVendaId?: StringFieldUpdateOperationsInput | string
    filialId?: StringFieldUpdateOperationsInput | string
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