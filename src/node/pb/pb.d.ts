import * as $protobuf from "protobufjs";
/** Namespace xyz. */
export namespace xyz {

    /** Namespace redtorch. */
    namespace redtorch {

        /** Namespace pb. */
        namespace pb {

            /** StrategyEngineTypeEnum enum. */
            enum StrategyEngineTypeEnum {
                SET_Treading = 0,
                SET_Backtesting = 1
            }

            /** GatewayTypeEnum enum. */
            enum GatewayTypeEnum {
                GTE_TradeAndMarketData = 0,
                GTE_MarketData = 1,
                GTE_Trade = 2
            }

            /** GatewayAdapterTypeEnum enum. */
            enum GatewayAdapterTypeEnum {
                GAT_CTP = 0,
                GAT_IB = 1,
                GAT_COMMON = 2
            }

            /** CommonStatusEnum enum. */
            enum CommonStatusEnum {
                COMS_SUCCESS = 0,
                COMS_INFO = 1,
                COMS_WARN = 2,
                COMS_ERROR = 3
            }

            /** LogLevelEnum enum. */
            enum LogLevelEnum {
                LL_All = 0,
                LL_Error = 40000,
                LL_Warn = 30000,
                LL_Info = 20000,
                LL_Debug = 10000,
                LL_Trace = 5000
            }

            /** MarketDataDBTypeEnum enum. */
            enum MarketDataDBTypeEnum {
                MDDT_MIX = 0,
                MDDT_TD = 1,
                MDDT_HIST = 2
            }

            /** BarPeriodEnum enum. */
            enum BarPeriodEnum {
                B_UNKNOWN = 0,
                B_5Sec = 5,
                B_1Min = 60,
                B_3Min = 180,
                B_5Min = 300,
                B_15Min = 900,
                B_1Day = 86400
            }

            /** ConnectStatusEnum enum. */
            enum ConnectStatusEnum {
                CS_Unknown = 0,
                CS_Disconnected = 1,
                CS_Connected = 2,
                CS_Disconnecting = 3,
                CS_Connecting = 4
            }

            /** OrderActionStatusTyp enum. */
            enum OrderActionStatusTyp {
                OAS_Unknown = 0,
                OAS_Submitted = 1,
                OAS_Accepted = 2,
                OAS_Rejected = 3
            }

            /** OrderStatusEnum enum. */
            enum OrderStatusEnum {
                OS_Unknown = 0,
                OS_AllTraded = 1,
                OS_PartTradedQueueing = 2,
                OS_PartTradedNotQueueing = 3,
                OS_NoTradeQueueing = 4,
                OS_NoTradeNotQueueing = 5,
                OS_Canceled = 6,
                OS_NotTouched = 7,
                OS_Touched = 8,
                OS_Rejected = 9
            }

            /** OrderSubmitStatusEnum enum. */
            enum OrderSubmitStatusEnum {
                OSS_Unknown = 0,
                OSS_InsertSubmitted = 1,
                OSS_CancelSubmitted = 2,
                OSS_ModifySubmitted = 3,
                OSS_Accepted = 4,
                OSS_InsertRejected = 5,
                OSS_CancelRejected = 6,
                OSS_ModifyRejected = 7
            }

            /** ProductClassEnum enum. */
            enum ProductClassEnum {
                UnknownProductClass = 0,
                EQUITY = 1,
                FUTURES = 2,
                OPTION = 3,
                INDEX = 4,
                COMBINATION = 5,
                BOND = 6,
                FOREX = 7,
                SPOT = 8,
                DEFER = 9,
                ETF = 10,
                WARRANTS = 11,
                SPREAD = 12,
                FUND = 13,
                EFP = 14,
                SPOTOPTION = 15,
                TAS = 16,
                MI = 17
            }

            /** DirectionEnum enum. */
            enum DirectionEnum {
                D_Unknown = 0,
                D_Buy = 1,
                D_Sell = 2
            }

            /** PositionTypeEnum enum. */
            enum PositionTypeEnum {
                PT_Unknown = 0,
                PT_Net = 1,
                PT_Gross = 2
            }

            /** PositionDirectionEnum enum. */
            enum PositionDirectionEnum {
                PD_Unknown = 0,
                PD_Net = 1,
                PD_Long = 2,
                PD_Short = 3
            }

            /** HedgeFlagEnum enum. */
            enum HedgeFlagEnum {
                HF_Unknown = 0,
                HF_Speculation = 1,
                HF_Arbitrage = 2,
                HF_Hedge = 3,
                HF_MarketMaker = 4,
                HF_SpecHedge = 5,
                HF_HedgeSpec = 6
            }

            /** OrderPriceTypeEnum enum. */
            enum OrderPriceTypeEnum {
                OPT_Unknown = 0,
                OPT_AnyPrice = 1,
                OPT_LimitPrice = 2,
                OPT_BestPrice = 3,
                OPT_LastPrice = 4,
                OPT_LastPricePlusOneTicks = 5,
                OPT_LastPricePlusTwoTicks = 6,
                OPT_LastPricePlusThreeTicks = 7,
                OPT_AskPrice1 = 8,
                OPT_AskPrice1PlusOneTicks = 9,
                OPT_AskPrice1PlusTwoTicks = 10,
                OPT_AskPrice1PlusThreeTicks = 11,
                OPT_BidPrice1 = 12,
                OPT_BidPrice1PlusOneTicks = 13,
                OPT_BidPrice1PlusTwoTicks = 14,
                OPT_BidPrice1PlusThreeTicks = 15,
                OPT_FiveLevelPrice = 16
            }

            /** OffsetFlagEnum enum. */
            enum OffsetFlagEnum {
                OF_Unknown = 0,
                OF_Open = 1,
                OF_Close = 2,
                OF_ForceClose = 3,
                OF_CloseToday = 4,
                OF_CloseYesterday = 5,
                OF_ForceOff = 6,
                OF_LocalForceClose = 7
            }

            /** ForceCloseReasonEnum enum. */
            enum ForceCloseReasonEnum {
                FCR_Unknown = 0,
                FCR_NotForceClose = 1,
                FCR_LackDeposit = 2,
                FCR_ClientOverPositionLimit = 3,
                FCR_MemberOverPositionLimit = 4,
                FCR_NotMultiple = 5,
                FCR_Violation = 6,
                FCR_Other = 7,
                FCR_PersonDeliver = 8
            }

            /** OrderTypeEnum enum. */
            enum OrderTypeEnum {
                OT_Unknown = 0,
                OT_Normal = 1,
                OT_DeriveFromQuote = 2,
                OT_DeriveFromCombination = 3,
                OT_Combination = 4,
                OT_ConditionalOrder = 5,
                OT_Swap = 6
            }

            /** TimeConditionEnum enum. */
            enum TimeConditionEnum {
                TC_Unknown = 0,
                TC_IOC = 1,
                TC_GFS = 2,
                TC_GFD = 3,
                TC_GTD = 4,
                TC_GTC = 5,
                TC_GFA = 6
            }

            /** VolumeConditionEnum enum. */
            enum VolumeConditionEnum {
                VC_Unknown = 0,
                VC_AV = 1,
                VC_MV = 2,
                VC_CV = 3
            }

            /** ContingentConditionEnum enum. */
            enum ContingentConditionEnum {
                CC_Unknown = 0,
                CC_Immediately = 1,
                CC_Touch = 2,
                CC_TouchProfit = 3,
                CC_ParkedOrder = 4,
                CC_LastPriceGreaterThanStopPrice = 5,
                CC_LastPriceGreaterEqualStopPrice = 6,
                CC_LastPriceLesserThanStopPrice = 7,
                CC_LastPriceLesserEqualStopPrice = 8,
                CC_AskPriceGreaterThanStopPrice = 9,
                CC_AskPriceGreaterEqualStopPrice = 10,
                CC_AskPriceLesserThanStopPrice = 11,
                CC_AskPriceLesserEqualStopPrice = 12,
                CC_BidPriceGreaterThanStopPrice = 13,
                CC_BidPriceGreaterEqualStopPrice = 14,
                CC_BidPriceLesserThanStopPrice = 15,
                CC_BidPriceLesserEqualStopPrice = 16,
                CC_LocalLastPriceLesserEqualStopPrice = 17,
                CC_LocalLastPriceGreaterEqualStopPrice = 18
            }

            /** ActionFlagEnum enum. */
            enum ActionFlagEnum {
                AF_Unknown = 0,
                AF_Delete = 1,
                AF_Modify = 2
            }

            /** TradingRightEnum enum. */
            enum TradingRightEnum {
                TR_Unknown = 0,
                TR_Allow = 1,
                TR_CloseOnly = 2,
                TR_Forbidden = 3
            }

            /** OrderSourceEnum enum. */
            enum OrderSourceEnum {
                ODS_Unknown = 0,
                ODS_Participant = 1,
                ODS_Administrator = 2
            }

            /** TradeTypeEnum enum. */
            enum TradeTypeEnum {
                TT_Unknown = 0,
                TT_SplitCombination = 1,
                TT_Common = 2,
                TT_OptionsExecution = 3,
                TT_OTC = 4,
                TT_EFPDerived = 5,
                TT_CombinationDerived = 6,
                TT_BlockTrade = 7
            }

            /** PriceSourceEnum enum. */
            enum PriceSourceEnum {
                PSRC_Unknown = 0,
                PSRC_LastPrice = 1,
                PSRC_Buy = 2,
                PSRC_Sell = 3,
                PSRC_OTC = 4
            }

            /** CurrencyEnum enum. */
            enum CurrencyEnum {
                UnknownCurrency = 0,
                USD = 1,
                CNY = 2,
                CNH = 3,
                HKD = 4,
                JPY = 5,
                EUR = 6,
                GBP = 7,
                DEM = 8,
                CHF = 9,
                FRF = 10,
                CAD = 11,
                AUD = 12,
                ATS = 13,
                FIM = 14,
                BEF = 15,
                THB = 16,
                IEP = 17,
                ITL = 18,
                LUF = 19,
                NLG = 20,
                PTE = 21,
                ESP = 22,
                IDR = 23,
                MYR = 24,
                NZD = 25,
                PHP = 26,
                SUR = 27,
                SGD = 28,
                KRW = 29
            }

            /** ExchangeEnum enum. */
            enum ExchangeEnum {
                UnknownExchange = 0,
                SSE = 1,
                SZSE = 2,
                CFFEX = 3,
                SHFE = 4,
                CZCE = 5,
                DCE = 6,
                SGE = 7,
                INE = 8,
                SEHK = 9,
                HKFE = 10,
                SGX = 11,
                NYBOT = 12,
                NYMEX = 13,
                CFE = 14,
                GLOBEX = 15,
                CMECRYPTO = 16,
                ICEEU = 17,
                ICEEUSOFT = 18,
                ICEUS = 19,
                IPE = 20,
                LMEOTC = 21,
                ECBOT = 22,
                APEX = 23,
                BMD = 24,
                MONEP = 25,
                DTB = 26,
                TOCOM = 27,
                TAIFEX = 28,
                SEHKSZSE = 29,
                SEHKNTL = 30,
                KSE = 31,
                OSE = 32,
                IB_IDEALPRO = 33,
                IB_SMART = 34
            }

            /** OptionsTypeEnum enum. */
            enum OptionsTypeEnum {
                O_Unknown = 0,
                O_CallOptions = 1,
                O_PutOptions = 2
            }

            /** StrikeModeEnum enum. */
            enum StrikeModeEnum {
                STM_Unknown = 0,
                STM_Continental = 1,
                STM_American = 2,
                STM_Bermuda = 3
            }

            /** CombinationTypeEnum enum. */
            enum CombinationTypeEnum {
                COMBT_Unknown = 0,
                COMBT_Future = 1,
                COMBT_BUL = 2,
                COMBT_BER = 3,
                COMBT_STD = 4,
                COMBT_STG = 5,
                COMBT_PRT = 6,
                COMBT_CLD = 7
            }

            /** Properties of a GatewayField. */
            interface IGatewayField {

                /** GatewayField gatewayId */
                gatewayId?: (string|null);

                /** GatewayField name */
                name?: (string|null);

                /** GatewayField description */
                description?: (string|null);

                /** GatewayField gatewayType */
                gatewayType?: (xyz.redtorch.pb.GatewayTypeEnum|null);

                /** GatewayField gatewayAdapterType */
                gatewayAdapterType?: (xyz.redtorch.pb.GatewayAdapterTypeEnum|null);

                /** GatewayField status */
                status?: (xyz.redtorch.pb.ConnectStatusEnum|null);

                /** GatewayField authErrorFlag */
                authErrorFlag?: (boolean|null);

                /** GatewayField targetNodeId */
                targetNodeId?: (number|null);

                /** GatewayField version */
                version?: (number|Long|null);
            }

            /** Represents a GatewayField. */
            class GatewayField implements IGatewayField {

                /**
                 * Constructs a new GatewayField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IGatewayField);

                /** GatewayField gatewayId. */
                public gatewayId: string;

                /** GatewayField name. */
                public name: string;

                /** GatewayField description. */
                public description: string;

                /** GatewayField gatewayType. */
                public gatewayType: xyz.redtorch.pb.GatewayTypeEnum;

                /** GatewayField gatewayAdapterType. */
                public gatewayAdapterType: xyz.redtorch.pb.GatewayAdapterTypeEnum;

                /** GatewayField status. */
                public status: xyz.redtorch.pb.ConnectStatusEnum;

                /** GatewayField authErrorFlag. */
                public authErrorFlag: boolean;

                /** GatewayField targetNodeId. */
                public targetNodeId: number;

                /** GatewayField version. */
                public version: (number|Long);

                /**
                 * Creates a new GatewayField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GatewayField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IGatewayField): xyz.redtorch.pb.GatewayField;

                /**
                 * Encodes the specified GatewayField message. Does not implicitly {@link xyz.redtorch.pb.GatewayField.verify|verify} messages.
                 * @param message GatewayField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IGatewayField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GatewayField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.GatewayField.verify|verify} messages.
                 * @param message GatewayField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IGatewayField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GatewayField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GatewayField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.GatewayField;

                /**
                 * Decodes a GatewayField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GatewayField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.GatewayField;

                /**
                 * Verifies a GatewayField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GatewayField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GatewayField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.GatewayField;

                /**
                 * Creates a plain object from a GatewayField message. Also converts values to other types if specified.
                 * @param message GatewayField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.GatewayField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GatewayField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ContractField. */
            interface IContractField {

                /** ContractField contractId */
                contractId?: (string|null);

                /** ContractField name */
                name?: (string|null);

                /** ContractField fullName */
                fullName?: (string|null);

                /** ContractField thirdPartyId */
                thirdPartyId?: (string|null);

                /** ContractField uniformSymbol */
                uniformSymbol?: (string|null);

                /** ContractField symbol */
                symbol?: (string|null);

                /** ContractField exchange */
                exchange?: (xyz.redtorch.pb.ExchangeEnum|null);

                /** ContractField productClass */
                productClass?: (xyz.redtorch.pb.ProductClassEnum|null);

                /** ContractField currency */
                currency?: (xyz.redtorch.pb.CurrencyEnum|null);

                /** ContractField multiplier */
                multiplier?: (number|null);

                /** ContractField priceTick */
                priceTick?: (number|null);

                /** ContractField longMarginRatio */
                longMarginRatio?: (number|null);

                /** ContractField shortMarginRatio */
                shortMarginRatio?: (number|null);

                /** ContractField maxMarginSideAlgorithm */
                maxMarginSideAlgorithm?: (boolean|null);

                /** ContractField underlyingSymbol */
                underlyingSymbol?: (string|null);

                /** ContractField strikePrice */
                strikePrice?: (number|null);

                /** ContractField optionsType */
                optionsType?: (xyz.redtorch.pb.OptionsTypeEnum|null);

                /** ContractField underlyingMultiplier */
                underlyingMultiplier?: (number|null);

                /** ContractField lastTradeDateOrContractMonth */
                lastTradeDateOrContractMonth?: (string|null);

                /** ContractField maxMarketOrderVolume */
                maxMarketOrderVolume?: (number|null);

                /** ContractField minMarketOrderVolume */
                minMarketOrderVolume?: (number|null);

                /** ContractField maxLimitOrderVolume */
                maxLimitOrderVolume?: (number|null);

                /** ContractField minLimitOrderVolume */
                minLimitOrderVolume?: (number|null);

                /** ContractField combinationType */
                combinationType?: (xyz.redtorch.pb.CombinationTypeEnum|null);

                /** ContractField gatewayId */
                gatewayId?: (string|null);
            }

            /** Represents a ContractField. */
            class ContractField implements IContractField {

                /**
                 * Constructs a new ContractField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IContractField);

                /** ContractField contractId. */
                public contractId: string;

                /** ContractField name. */
                public name: string;

                /** ContractField fullName. */
                public fullName: string;

                /** ContractField thirdPartyId. */
                public thirdPartyId: string;

                /** ContractField uniformSymbol. */
                public uniformSymbol: string;

                /** ContractField symbol. */
                public symbol: string;

                /** ContractField exchange. */
                public exchange: xyz.redtorch.pb.ExchangeEnum;

                /** ContractField productClass. */
                public productClass: xyz.redtorch.pb.ProductClassEnum;

                /** ContractField currency. */
                public currency: xyz.redtorch.pb.CurrencyEnum;

                /** ContractField multiplier. */
                public multiplier: number;

                /** ContractField priceTick. */
                public priceTick: number;

                /** ContractField longMarginRatio. */
                public longMarginRatio: number;

                /** ContractField shortMarginRatio. */
                public shortMarginRatio: number;

                /** ContractField maxMarginSideAlgorithm. */
                public maxMarginSideAlgorithm: boolean;

                /** ContractField underlyingSymbol. */
                public underlyingSymbol: string;

                /** ContractField strikePrice. */
                public strikePrice: number;

                /** ContractField optionsType. */
                public optionsType: xyz.redtorch.pb.OptionsTypeEnum;

                /** ContractField underlyingMultiplier. */
                public underlyingMultiplier: number;

                /** ContractField lastTradeDateOrContractMonth. */
                public lastTradeDateOrContractMonth: string;

                /** ContractField maxMarketOrderVolume. */
                public maxMarketOrderVolume: number;

                /** ContractField minMarketOrderVolume. */
                public minMarketOrderVolume: number;

                /** ContractField maxLimitOrderVolume. */
                public maxLimitOrderVolume: number;

                /** ContractField minLimitOrderVolume. */
                public minLimitOrderVolume: number;

                /** ContractField combinationType. */
                public combinationType: xyz.redtorch.pb.CombinationTypeEnum;

                /** ContractField gatewayId. */
                public gatewayId: string;

                /**
                 * Creates a new ContractField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContractField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IContractField): xyz.redtorch.pb.ContractField;

                /**
                 * Encodes the specified ContractField message. Does not implicitly {@link xyz.redtorch.pb.ContractField.verify|verify} messages.
                 * @param message ContractField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IContractField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContractField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.ContractField.verify|verify} messages.
                 * @param message ContractField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IContractField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContractField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContractField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.ContractField;

                /**
                 * Decodes a ContractField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContractField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.ContractField;

                /**
                 * Verifies a ContractField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContractField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContractField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.ContractField;

                /**
                 * Creates a plain object from a ContractField message. Also converts values to other types if specified.
                 * @param message ContractField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.ContractField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContractField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AccountField. */
            interface IAccountField {

                /** AccountField accountId */
                accountId?: (string|null);

                /** AccountField code */
                code?: (string|null);

                /** AccountField name */
                name?: (string|null);

                /** AccountField holder */
                holder?: (string|null);

                /** AccountField currency */
                currency?: (xyz.redtorch.pb.CurrencyEnum|null);

                /** AccountField preBalance */
                preBalance?: (number|null);

                /** AccountField balance */
                balance?: (number|null);

                /** AccountField available */
                available?: (number|null);

                /** AccountField commission */
                commission?: (number|null);

                /** AccountField margin */
                margin?: (number|null);

                /** AccountField closeProfit */
                closeProfit?: (number|null);

                /** AccountField positionProfit */
                positionProfit?: (number|null);

                /** AccountField deposit */
                deposit?: (number|null);

                /** AccountField withdraw */
                withdraw?: (number|null);

                /** AccountField gatewayId */
                gatewayId?: (string|null);

                /** AccountField localCreatedTimestamp */
                localCreatedTimestamp?: (number|Long|null);
            }

            /** Represents an AccountField. */
            class AccountField implements IAccountField {

                /**
                 * Constructs a new AccountField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IAccountField);

                /** AccountField accountId. */
                public accountId: string;

                /** AccountField code. */
                public code: string;

                /** AccountField name. */
                public name: string;

                /** AccountField holder. */
                public holder: string;

                /** AccountField currency. */
                public currency: xyz.redtorch.pb.CurrencyEnum;

                /** AccountField preBalance. */
                public preBalance: number;

                /** AccountField balance. */
                public balance: number;

                /** AccountField available. */
                public available: number;

                /** AccountField commission. */
                public commission: number;

                /** AccountField margin. */
                public margin: number;

                /** AccountField closeProfit. */
                public closeProfit: number;

                /** AccountField positionProfit. */
                public positionProfit: number;

                /** AccountField deposit. */
                public deposit: number;

                /** AccountField withdraw. */
                public withdraw: number;

                /** AccountField gatewayId. */
                public gatewayId: string;

                /** AccountField localCreatedTimestamp. */
                public localCreatedTimestamp: (number|Long);

                /**
                 * Creates a new AccountField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AccountField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IAccountField): xyz.redtorch.pb.AccountField;

                /**
                 * Encodes the specified AccountField message. Does not implicitly {@link xyz.redtorch.pb.AccountField.verify|verify} messages.
                 * @param message AccountField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IAccountField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccountField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.AccountField.verify|verify} messages.
                 * @param message AccountField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IAccountField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccountField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccountField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.AccountField;

                /**
                 * Decodes an AccountField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccountField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.AccountField;

                /**
                 * Verifies an AccountField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccountField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccountField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.AccountField;

                /**
                 * Creates a plain object from an AccountField message. Also converts values to other types if specified.
                 * @param message AccountField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.AccountField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccountField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderField. */
            interface IOrderField {

                /** OrderField originOrderId */
                originOrderId?: (string|null);

                /** OrderField orderId */
                orderId?: (string|null);

                /** OrderField adapterOrderId */
                adapterOrderId?: (string|null);

                /** OrderField accountId */
                accountId?: (string|null);

                /** OrderField orderLocalId */
                orderLocalId?: (string|null);

                /** OrderField brokerOrderSeq */
                brokerOrderSeq?: (string|null);

                /** OrderField orderSysId */
                orderSysId?: (string|null);

                /** OrderField sequenceNo */
                sequenceNo?: (string|null);

                /** OrderField direction */
                direction?: (xyz.redtorch.pb.DirectionEnum|null);

                /** OrderField offsetFlag */
                offsetFlag?: (xyz.redtorch.pb.OffsetFlagEnum|null);

                /** OrderField hedgeFlag */
                hedgeFlag?: (xyz.redtorch.pb.HedgeFlagEnum|null);

                /** OrderField orderPriceType */
                orderPriceType?: (xyz.redtorch.pb.OrderPriceTypeEnum|null);

                /** OrderField orderStatus */
                orderStatus?: (xyz.redtorch.pb.OrderStatusEnum|null);

                /** OrderField price */
                price?: (number|null);

                /** OrderField totalVolume */
                totalVolume?: (number|null);

                /** OrderField tradedVolume */
                tradedVolume?: (number|null);

                /** OrderField timeCondition */
                timeCondition?: (xyz.redtorch.pb.TimeConditionEnum|null);

                /** OrderField gtdDate */
                gtdDate?: (string|null);

                /** OrderField volumeCondition */
                volumeCondition?: (xyz.redtorch.pb.VolumeConditionEnum|null);

                /** OrderField minVolume */
                minVolume?: (number|null);

                /** OrderField contingentCondition */
                contingentCondition?: (xyz.redtorch.pb.ContingentConditionEnum|null);

                /** OrderField stopPrice */
                stopPrice?: (number|null);

                /** OrderField forceCloseReason */
                forceCloseReason?: (xyz.redtorch.pb.ForceCloseReasonEnum|null);

                /** OrderField autoSuspend */
                autoSuspend?: (number|null);

                /** OrderField userForceClose */
                userForceClose?: (number|null);

                /** OrderField swapOrder */
                swapOrder?: (number|null);

                /** OrderField tradingDay */
                tradingDay?: (string|null);

                /** OrderField orderDate */
                orderDate?: (string|null);

                /** OrderField orderTime */
                orderTime?: (string|null);

                /** OrderField activeTime */
                activeTime?: (string|null);

                /** OrderField suspendTime */
                suspendTime?: (string|null);

                /** OrderField cancelTime */
                cancelTime?: (string|null);

                /** OrderField updateTime */
                updateTime?: (string|null);

                /** OrderField statusMsg */
                statusMsg?: (string|null);

                /** OrderField frontId */
                frontId?: (number|null);

                /** OrderField sessionId */
                sessionId?: (number|null);

                /** OrderField contract */
                contract?: (xyz.redtorch.pb.IContractField|null);

                /** OrderField gatewayId */
                gatewayId?: (string|null);

                /** OrderField orderSubmitStatus */
                orderSubmitStatus?: (xyz.redtorch.pb.OrderSubmitStatusEnum|null);
            }

            /** Represents an OrderField. */
            class OrderField implements IOrderField {

                /**
                 * Constructs a new OrderField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IOrderField);

                /** OrderField originOrderId. */
                public originOrderId: string;

                /** OrderField orderId. */
                public orderId: string;

                /** OrderField adapterOrderId. */
                public adapterOrderId: string;

                /** OrderField accountId. */
                public accountId: string;

                /** OrderField orderLocalId. */
                public orderLocalId: string;

                /** OrderField brokerOrderSeq. */
                public brokerOrderSeq: string;

                /** OrderField orderSysId. */
                public orderSysId: string;

                /** OrderField sequenceNo. */
                public sequenceNo: string;

                /** OrderField direction. */
                public direction: xyz.redtorch.pb.DirectionEnum;

                /** OrderField offsetFlag. */
                public offsetFlag: xyz.redtorch.pb.OffsetFlagEnum;

                /** OrderField hedgeFlag. */
                public hedgeFlag: xyz.redtorch.pb.HedgeFlagEnum;

                /** OrderField orderPriceType. */
                public orderPriceType: xyz.redtorch.pb.OrderPriceTypeEnum;

                /** OrderField orderStatus. */
                public orderStatus: xyz.redtorch.pb.OrderStatusEnum;

                /** OrderField price. */
                public price: number;

                /** OrderField totalVolume. */
                public totalVolume: number;

                /** OrderField tradedVolume. */
                public tradedVolume: number;

                /** OrderField timeCondition. */
                public timeCondition: xyz.redtorch.pb.TimeConditionEnum;

                /** OrderField gtdDate. */
                public gtdDate: string;

                /** OrderField volumeCondition. */
                public volumeCondition: xyz.redtorch.pb.VolumeConditionEnum;

                /** OrderField minVolume. */
                public minVolume: number;

                /** OrderField contingentCondition. */
                public contingentCondition: xyz.redtorch.pb.ContingentConditionEnum;

                /** OrderField stopPrice. */
                public stopPrice: number;

                /** OrderField forceCloseReason. */
                public forceCloseReason: xyz.redtorch.pb.ForceCloseReasonEnum;

                /** OrderField autoSuspend. */
                public autoSuspend: number;

                /** OrderField userForceClose. */
                public userForceClose: number;

                /** OrderField swapOrder. */
                public swapOrder: number;

                /** OrderField tradingDay. */
                public tradingDay: string;

                /** OrderField orderDate. */
                public orderDate: string;

                /** OrderField orderTime. */
                public orderTime: string;

                /** OrderField activeTime. */
                public activeTime: string;

                /** OrderField suspendTime. */
                public suspendTime: string;

                /** OrderField cancelTime. */
                public cancelTime: string;

                /** OrderField updateTime. */
                public updateTime: string;

                /** OrderField statusMsg. */
                public statusMsg: string;

                /** OrderField frontId. */
                public frontId: number;

                /** OrderField sessionId. */
                public sessionId: number;

                /** OrderField contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /** OrderField gatewayId. */
                public gatewayId: string;

                /** OrderField orderSubmitStatus. */
                public orderSubmitStatus: xyz.redtorch.pb.OrderSubmitStatusEnum;

                /**
                 * Creates a new OrderField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IOrderField): xyz.redtorch.pb.OrderField;

                /**
                 * Encodes the specified OrderField message. Does not implicitly {@link xyz.redtorch.pb.OrderField.verify|verify} messages.
                 * @param message OrderField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IOrderField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.OrderField.verify|verify} messages.
                 * @param message OrderField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IOrderField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.OrderField;

                /**
                 * Decodes an OrderField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.OrderField;

                /**
                 * Verifies an OrderField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.OrderField;

                /**
                 * Creates a plain object from an OrderField message. Also converts values to other types if specified.
                 * @param message OrderField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.OrderField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TradeField. */
            interface ITradeField {

                /** TradeField tradeId */
                tradeId?: (string|null);

                /** TradeField adapterTradeId */
                adapterTradeId?: (string|null);

                /** TradeField originOrderId */
                originOrderId?: (string|null);

                /** TradeField orderId */
                orderId?: (string|null);

                /** TradeField adapterOrderId */
                adapterOrderId?: (string|null);

                /** TradeField orderLocalId */
                orderLocalId?: (string|null);

                /** TradeField brokerOrderSeq */
                brokerOrderSeq?: (string|null);

                /** TradeField orderSysId */
                orderSysId?: (string|null);

                /** TradeField settlementId */
                settlementId?: (string|null);

                /** TradeField sequenceNo */
                sequenceNo?: (string|null);

                /** TradeField accountId */
                accountId?: (string|null);

                /** TradeField direction */
                direction?: (xyz.redtorch.pb.DirectionEnum|null);

                /** TradeField offsetFlag */
                offsetFlag?: (xyz.redtorch.pb.OffsetFlagEnum|null);

                /** TradeField hedgeFlag */
                hedgeFlag?: (xyz.redtorch.pb.HedgeFlagEnum|null);

                /** TradeField price */
                price?: (number|null);

                /** TradeField volume */
                volume?: (number|null);

                /** TradeField tradeType */
                tradeType?: (xyz.redtorch.pb.TradeTypeEnum|null);

                /** TradeField priceSource */
                priceSource?: (xyz.redtorch.pb.PriceSourceEnum|null);

                /** TradeField tradingDay */
                tradingDay?: (string|null);

                /** TradeField tradeDate */
                tradeDate?: (string|null);

                /** TradeField tradeTime */
                tradeTime?: (string|null);

                /** TradeField tradeTimestamp */
                tradeTimestamp?: (number|Long|null);

                /** TradeField contract */
                contract?: (xyz.redtorch.pb.IContractField|null);

                /** TradeField gatewayId */
                gatewayId?: (string|null);
            }

            /** Represents a TradeField. */
            class TradeField implements ITradeField {

                /**
                 * Constructs a new TradeField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ITradeField);

                /** TradeField tradeId. */
                public tradeId: string;

                /** TradeField adapterTradeId. */
                public adapterTradeId: string;

                /** TradeField originOrderId. */
                public originOrderId: string;

                /** TradeField orderId. */
                public orderId: string;

                /** TradeField adapterOrderId. */
                public adapterOrderId: string;

                /** TradeField orderLocalId. */
                public orderLocalId: string;

                /** TradeField brokerOrderSeq. */
                public brokerOrderSeq: string;

                /** TradeField orderSysId. */
                public orderSysId: string;

                /** TradeField settlementId. */
                public settlementId: string;

                /** TradeField sequenceNo. */
                public sequenceNo: string;

                /** TradeField accountId. */
                public accountId: string;

                /** TradeField direction. */
                public direction: xyz.redtorch.pb.DirectionEnum;

                /** TradeField offsetFlag. */
                public offsetFlag: xyz.redtorch.pb.OffsetFlagEnum;

                /** TradeField hedgeFlag. */
                public hedgeFlag: xyz.redtorch.pb.HedgeFlagEnum;

                /** TradeField price. */
                public price: number;

                /** TradeField volume. */
                public volume: number;

                /** TradeField tradeType. */
                public tradeType: xyz.redtorch.pb.TradeTypeEnum;

                /** TradeField priceSource. */
                public priceSource: xyz.redtorch.pb.PriceSourceEnum;

                /** TradeField tradingDay. */
                public tradingDay: string;

                /** TradeField tradeDate. */
                public tradeDate: string;

                /** TradeField tradeTime. */
                public tradeTime: string;

                /** TradeField tradeTimestamp. */
                public tradeTimestamp: (number|Long);

                /** TradeField contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /** TradeField gatewayId. */
                public gatewayId: string;

                /**
                 * Creates a new TradeField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TradeField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ITradeField): xyz.redtorch.pb.TradeField;

                /**
                 * Encodes the specified TradeField message. Does not implicitly {@link xyz.redtorch.pb.TradeField.verify|verify} messages.
                 * @param message TradeField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ITradeField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TradeField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.TradeField.verify|verify} messages.
                 * @param message TradeField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ITradeField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TradeField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TradeField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.TradeField;

                /**
                 * Decodes a TradeField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TradeField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.TradeField;

                /**
                 * Verifies a TradeField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TradeField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TradeField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.TradeField;

                /**
                 * Creates a plain object from a TradeField message. Also converts values to other types if specified.
                 * @param message TradeField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.TradeField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TradeField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PositionField. */
            interface IPositionField {

                /** PositionField positionId */
                positionId?: (string|null);

                /** PositionField accountId */
                accountId?: (string|null);

                /** PositionField positionDirection */
                positionDirection?: (xyz.redtorch.pb.PositionDirectionEnum|null);

                /** PositionField position */
                position?: (number|null);

                /** PositionField frozen */
                frozen?: (number|null);

                /** PositionField ydPosition */
                ydPosition?: (number|null);

                /** PositionField ydFrozen */
                ydFrozen?: (number|null);

                /** PositionField tdPosition */
                tdPosition?: (number|null);

                /** PositionField tdFrozen */
                tdFrozen?: (number|null);

                /** PositionField lastPrice */
                lastPrice?: (number|null);

                /** PositionField price */
                price?: (number|null);

                /** PositionField priceDiff */
                priceDiff?: (number|null);

                /** PositionField openPrice */
                openPrice?: (number|null);

                /** PositionField openPriceDiff */
                openPriceDiff?: (number|null);

                /** PositionField positionProfit */
                positionProfit?: (number|null);

                /** PositionField positionProfitRatio */
                positionProfitRatio?: (number|null);

                /** PositionField openPositionProfit */
                openPositionProfit?: (number|null);

                /** PositionField openPositionProfitRatio */
                openPositionProfitRatio?: (number|null);

                /** PositionField useMargin */
                useMargin?: (number|null);

                /** PositionField exchangeMargin */
                exchangeMargin?: (number|null);

                /** PositionField contractValue */
                contractValue?: (number|null);

                /** PositionField hedgeFlag */
                hedgeFlag?: (xyz.redtorch.pb.HedgeFlagEnum|null);

                /** PositionField contract */
                contract?: (xyz.redtorch.pb.IContractField|null);

                /** PositionField gatewayId */
                gatewayId?: (string|null);

                /** PositionField localCreatedTimestamp */
                localCreatedTimestamp?: (number|Long|null);
            }

            /** Represents a PositionField. */
            class PositionField implements IPositionField {

                /**
                 * Constructs a new PositionField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IPositionField);

                /** PositionField positionId. */
                public positionId: string;

                /** PositionField accountId. */
                public accountId: string;

                /** PositionField positionDirection. */
                public positionDirection: xyz.redtorch.pb.PositionDirectionEnum;

                /** PositionField position. */
                public position: number;

                /** PositionField frozen. */
                public frozen: number;

                /** PositionField ydPosition. */
                public ydPosition: number;

                /** PositionField ydFrozen. */
                public ydFrozen: number;

                /** PositionField tdPosition. */
                public tdPosition: number;

                /** PositionField tdFrozen. */
                public tdFrozen: number;

                /** PositionField lastPrice. */
                public lastPrice: number;

                /** PositionField price. */
                public price: number;

                /** PositionField priceDiff. */
                public priceDiff: number;

                /** PositionField openPrice. */
                public openPrice: number;

                /** PositionField openPriceDiff. */
                public openPriceDiff: number;

                /** PositionField positionProfit. */
                public positionProfit: number;

                /** PositionField positionProfitRatio. */
                public positionProfitRatio: number;

                /** PositionField openPositionProfit. */
                public openPositionProfit: number;

                /** PositionField openPositionProfitRatio. */
                public openPositionProfitRatio: number;

                /** PositionField useMargin. */
                public useMargin: number;

                /** PositionField exchangeMargin. */
                public exchangeMargin: number;

                /** PositionField contractValue. */
                public contractValue: number;

                /** PositionField hedgeFlag. */
                public hedgeFlag: xyz.redtorch.pb.HedgeFlagEnum;

                /** PositionField contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /** PositionField gatewayId. */
                public gatewayId: string;

                /** PositionField localCreatedTimestamp. */
                public localCreatedTimestamp: (number|Long);

                /**
                 * Creates a new PositionField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PositionField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IPositionField): xyz.redtorch.pb.PositionField;

                /**
                 * Encodes the specified PositionField message. Does not implicitly {@link xyz.redtorch.pb.PositionField.verify|verify} messages.
                 * @param message PositionField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IPositionField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PositionField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.PositionField.verify|verify} messages.
                 * @param message PositionField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IPositionField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PositionField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PositionField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.PositionField;

                /**
                 * Decodes a PositionField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PositionField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.PositionField;

                /**
                 * Verifies a PositionField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PositionField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PositionField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.PositionField;

                /**
                 * Creates a plain object from a PositionField message. Also converts values to other types if specified.
                 * @param message PositionField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.PositionField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PositionField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TickField. */
            interface ITickField {

                /** TickField uniformSymbol */
                uniformSymbol?: (string|null);

                /** TickField gatewayId */
                gatewayId?: (string|null);

                /** TickField tradingDay */
                tradingDay?: (number|null);

                /** TickField actionDay */
                actionDay?: (number|null);

                /** TickField actionTime */
                actionTime?: (number|null);

                /** TickField actionTimestamp */
                actionTimestamp?: (number|Long|null);

                /** TickField lastPrice */
                lastPrice?: (number|null);

                /** TickField avgPrice */
                avgPrice?: (number|null);

                /** TickField volumeDelta */
                volumeDelta?: (number|Long|null);

                /** TickField volume */
                volume?: (number|Long|null);

                /** TickField turnover */
                turnover?: (number|null);

                /** TickField turnoverDelta */
                turnoverDelta?: (number|null);

                /** TickField openInterest */
                openInterest?: (number|null);

                /** TickField openInterestDelta */
                openInterestDelta?: (number|null);

                /** TickField preOpenInterest */
                preOpenInterest?: (number|null);

                /** TickField preClosePrice */
                preClosePrice?: (number|null);

                /** TickField settlePrice */
                settlePrice?: (number|null);

                /** TickField preSettlePrice */
                preSettlePrice?: (number|null);

                /** TickField openPrice */
                openPrice?: (number|null);

                /** TickField highPrice */
                highPrice?: (number|null);

                /** TickField lowPrice */
                lowPrice?: (number|null);

                /** TickField upperLimit */
                upperLimit?: (number|null);

                /** TickField lowerLimit */
                lowerLimit?: (number|null);

                /** TickField bidPrice */
                bidPrice?: (number[]|null);

                /** TickField askPrice */
                askPrice?: (number[]|null);

                /** TickField bidVolume */
                bidVolume?: (number[]|null);

                /** TickField askVolume */
                askVolume?: (number[]|null);
            }

            /** Represents a TickField. */
            class TickField implements ITickField {

                /**
                 * Constructs a new TickField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ITickField);

                /** TickField uniformSymbol. */
                public uniformSymbol: string;

                /** TickField gatewayId. */
                public gatewayId: string;

                /** TickField tradingDay. */
                public tradingDay: number;

                /** TickField actionDay. */
                public actionDay: number;

                /** TickField actionTime. */
                public actionTime: number;

                /** TickField actionTimestamp. */
                public actionTimestamp: (number|Long);

                /** TickField lastPrice. */
                public lastPrice: number;

                /** TickField avgPrice. */
                public avgPrice: number;

                /** TickField volumeDelta. */
                public volumeDelta: (number|Long);

                /** TickField volume. */
                public volume: (number|Long);

                /** TickField turnover. */
                public turnover: number;

                /** TickField turnoverDelta. */
                public turnoverDelta: number;

                /** TickField openInterest. */
                public openInterest: number;

                /** TickField openInterestDelta. */
                public openInterestDelta: number;

                /** TickField preOpenInterest. */
                public preOpenInterest: number;

                /** TickField preClosePrice. */
                public preClosePrice: number;

                /** TickField settlePrice. */
                public settlePrice: number;

                /** TickField preSettlePrice. */
                public preSettlePrice: number;

                /** TickField openPrice. */
                public openPrice: number;

                /** TickField highPrice. */
                public highPrice: number;

                /** TickField lowPrice. */
                public lowPrice: number;

                /** TickField upperLimit. */
                public upperLimit: number;

                /** TickField lowerLimit. */
                public lowerLimit: number;

                /** TickField bidPrice. */
                public bidPrice: number[];

                /** TickField askPrice. */
                public askPrice: number[];

                /** TickField bidVolume. */
                public bidVolume: number[];

                /** TickField askVolume. */
                public askVolume: number[];

                /**
                 * Creates a new TickField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TickField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ITickField): xyz.redtorch.pb.TickField;

                /**
                 * Encodes the specified TickField message. Does not implicitly {@link xyz.redtorch.pb.TickField.verify|verify} messages.
                 * @param message TickField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ITickField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TickField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.TickField.verify|verify} messages.
                 * @param message TickField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ITickField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TickField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TickField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.TickField;

                /**
                 * Decodes a TickField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TickField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.TickField;

                /**
                 * Verifies a TickField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TickField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TickField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.TickField;

                /**
                 * Creates a plain object from a TickField message. Also converts values to other types if specified.
                 * @param message TickField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.TickField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TickField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BarField. */
            interface IBarField {

                /** BarField uniformSymbol */
                uniformSymbol?: (string|null);

                /** BarField gatewayId */
                gatewayId?: (string|null);

                /** BarField tradingDay */
                tradingDay?: (number|null);

                /** BarField actionDay */
                actionDay?: (number|null);

                /** BarField actionTime */
                actionTime?: (number|null);

                /** BarField actionTimestamp */
                actionTimestamp?: (number|Long|null);

                /** BarField openPrice */
                openPrice?: (number|null);

                /** BarField highPrice */
                highPrice?: (number|null);

                /** BarField lowPrice */
                lowPrice?: (number|null);

                /** BarField closePrice */
                closePrice?: (number|null);

                /** BarField openInterest */
                openInterest?: (number|null);

                /** BarField openInterestDelta */
                openInterestDelta?: (number|null);

                /** BarField volume */
                volume?: (number|Long|null);

                /** BarField volumeDelta */
                volumeDelta?: (number|Long|null);

                /** BarField turnover */
                turnover?: (number|null);

                /** BarField turnoverDelta */
                turnoverDelta?: (number|null);

                /** BarField preOpenInterest */
                preOpenInterest?: (number|null);

                /** BarField preClosePrice */
                preClosePrice?: (number|null);

                /** BarField preSettlePrice */
                preSettlePrice?: (number|null);

                /** BarField period */
                period?: (number|null);
            }

            /** Represents a BarField. */
            class BarField implements IBarField {

                /**
                 * Constructs a new BarField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IBarField);

                /** BarField uniformSymbol. */
                public uniformSymbol: string;

                /** BarField gatewayId. */
                public gatewayId: string;

                /** BarField tradingDay. */
                public tradingDay: number;

                /** BarField actionDay. */
                public actionDay: number;

                /** BarField actionTime. */
                public actionTime: number;

                /** BarField actionTimestamp. */
                public actionTimestamp: (number|Long);

                /** BarField openPrice. */
                public openPrice: number;

                /** BarField highPrice. */
                public highPrice: number;

                /** BarField lowPrice. */
                public lowPrice: number;

                /** BarField closePrice. */
                public closePrice: number;

                /** BarField openInterest. */
                public openInterest: number;

                /** BarField openInterestDelta. */
                public openInterestDelta: number;

                /** BarField volume. */
                public volume: (number|Long);

                /** BarField volumeDelta. */
                public volumeDelta: (number|Long);

                /** BarField turnover. */
                public turnover: number;

                /** BarField turnoverDelta. */
                public turnoverDelta: number;

                /** BarField preOpenInterest. */
                public preOpenInterest: number;

                /** BarField preClosePrice. */
                public preClosePrice: number;

                /** BarField preSettlePrice. */
                public preSettlePrice: number;

                /** BarField period. */
                public period: number;

                /**
                 * Creates a new BarField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BarField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IBarField): xyz.redtorch.pb.BarField;

                /**
                 * Encodes the specified BarField message. Does not implicitly {@link xyz.redtorch.pb.BarField.verify|verify} messages.
                 * @param message BarField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IBarField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BarField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.BarField.verify|verify} messages.
                 * @param message BarField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IBarField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BarField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BarField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.BarField;

                /**
                 * Decodes a BarField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BarField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.BarField;

                /**
                 * Verifies a BarField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BarField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BarField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.BarField;

                /**
                 * Creates a plain object from a BarField message. Also converts values to other types if specified.
                 * @param message BarField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.BarField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BarField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CommonReqField. */
            interface ICommonReqField {

                /** CommonReqField transactionId */
                transactionId?: (string|null);

                /** CommonReqField operatorId */
                operatorId?: (string|null);
            }

            /** Represents a CommonReqField. */
            class CommonReqField implements ICommonReqField {

                /**
                 * Constructs a new CommonReqField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ICommonReqField);

                /** CommonReqField transactionId. */
                public transactionId: string;

                /** CommonReqField operatorId. */
                public operatorId: string;

                /**
                 * Creates a new CommonReqField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommonReqField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ICommonReqField): xyz.redtorch.pb.CommonReqField;

                /**
                 * Encodes the specified CommonReqField message. Does not implicitly {@link xyz.redtorch.pb.CommonReqField.verify|verify} messages.
                 * @param message CommonReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ICommonReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommonReqField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.CommonReqField.verify|verify} messages.
                 * @param message CommonReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ICommonReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommonReqField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommonReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.CommonReqField;

                /**
                 * Decodes a CommonReqField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommonReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.CommonReqField;

                /**
                 * Verifies a CommonReqField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommonReqField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommonReqField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.CommonReqField;

                /**
                 * Creates a plain object from a CommonReqField message. Also converts values to other types if specified.
                 * @param message CommonReqField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.CommonReqField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommonReqField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CommonRspField. */
            interface ICommonRspField {

                /** CommonRspField transactionId */
                transactionId?: (string|null);

                /** CommonRspField errorId */
                errorId?: (number|null);

                /** CommonRspField errorMsg */
                errorMsg?: (string|null);
            }

            /** Represents a CommonRspField. */
            class CommonRspField implements ICommonRspField {

                /**
                 * Constructs a new CommonRspField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ICommonRspField);

                /** CommonRspField transactionId. */
                public transactionId: string;

                /** CommonRspField errorId. */
                public errorId: number;

                /** CommonRspField errorMsg. */
                public errorMsg: string;

                /**
                 * Creates a new CommonRspField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommonRspField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ICommonRspField): xyz.redtorch.pb.CommonRspField;

                /**
                 * Encodes the specified CommonRspField message. Does not implicitly {@link xyz.redtorch.pb.CommonRspField.verify|verify} messages.
                 * @param message CommonRspField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ICommonRspField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommonRspField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.CommonRspField.verify|verify} messages.
                 * @param message CommonRspField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ICommonRspField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommonRspField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommonRspField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.CommonRspField;

                /**
                 * Decodes a CommonRspField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommonRspField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.CommonRspField;

                /**
                 * Verifies a CommonRspField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommonRspField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommonRspField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.CommonRspField;

                /**
                 * Creates a plain object from a CommonRspField message. Also converts values to other types if specified.
                 * @param message CommonRspField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.CommonRspField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommonRspField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SubmitOrderReqField. */
            interface ISubmitOrderReqField {

                /** SubmitOrderReqField originOrderId */
                originOrderId?: (string|null);

                /** SubmitOrderReqField accountCode */
                accountCode?: (string|null);

                /** SubmitOrderReqField currency */
                currency?: (xyz.redtorch.pb.CurrencyEnum|null);

                /** SubmitOrderReqField contract */
                contract?: (xyz.redtorch.pb.IContractField|null);

                /** SubmitOrderReqField gatewayId */
                gatewayId?: (string|null);

                /** SubmitOrderReqField volume */
                volume?: (number|null);

                /** SubmitOrderReqField price */
                price?: (number|null);

                /** SubmitOrderReqField orderPriceType */
                orderPriceType?: (xyz.redtorch.pb.OrderPriceTypeEnum|null);

                /** SubmitOrderReqField direction */
                direction?: (xyz.redtorch.pb.DirectionEnum|null);

                /** SubmitOrderReqField offsetFlag */
                offsetFlag?: (xyz.redtorch.pb.OffsetFlagEnum|null);

                /** SubmitOrderReqField hedgeFlag */
                hedgeFlag?: (xyz.redtorch.pb.HedgeFlagEnum|null);

                /** SubmitOrderReqField timeCondition */
                timeCondition?: (xyz.redtorch.pb.TimeConditionEnum|null);

                /** SubmitOrderReqField gtdDate */
                gtdDate?: (string|null);

                /** SubmitOrderReqField volumeCondition */
                volumeCondition?: (xyz.redtorch.pb.VolumeConditionEnum|null);

                /** SubmitOrderReqField minVolume */
                minVolume?: (number|null);

                /** SubmitOrderReqField contingentCondition */
                contingentCondition?: (xyz.redtorch.pb.ContingentConditionEnum|null);

                /** SubmitOrderReqField stopPrice */
                stopPrice?: (number|null);

                /** SubmitOrderReqField forceCloseReason */
                forceCloseReason?: (xyz.redtorch.pb.ForceCloseReasonEnum|null);

                /** SubmitOrderReqField autoSuspend */
                autoSuspend?: (number|null);

                /** SubmitOrderReqField userForceClose */
                userForceClose?: (number|null);

                /** SubmitOrderReqField swapOrder */
                swapOrder?: (number|null);
            }

            /** Represents a SubmitOrderReqField. */
            class SubmitOrderReqField implements ISubmitOrderReqField {

                /**
                 * Constructs a new SubmitOrderReqField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ISubmitOrderReqField);

                /** SubmitOrderReqField originOrderId. */
                public originOrderId: string;

                /** SubmitOrderReqField accountCode. */
                public accountCode: string;

                /** SubmitOrderReqField currency. */
                public currency: xyz.redtorch.pb.CurrencyEnum;

                /** SubmitOrderReqField contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /** SubmitOrderReqField gatewayId. */
                public gatewayId: string;

                /** SubmitOrderReqField volume. */
                public volume: number;

                /** SubmitOrderReqField price. */
                public price: number;

                /** SubmitOrderReqField orderPriceType. */
                public orderPriceType: xyz.redtorch.pb.OrderPriceTypeEnum;

                /** SubmitOrderReqField direction. */
                public direction: xyz.redtorch.pb.DirectionEnum;

                /** SubmitOrderReqField offsetFlag. */
                public offsetFlag: xyz.redtorch.pb.OffsetFlagEnum;

                /** SubmitOrderReqField hedgeFlag. */
                public hedgeFlag: xyz.redtorch.pb.HedgeFlagEnum;

                /** SubmitOrderReqField timeCondition. */
                public timeCondition: xyz.redtorch.pb.TimeConditionEnum;

                /** SubmitOrderReqField gtdDate. */
                public gtdDate: string;

                /** SubmitOrderReqField volumeCondition. */
                public volumeCondition: xyz.redtorch.pb.VolumeConditionEnum;

                /** SubmitOrderReqField minVolume. */
                public minVolume: number;

                /** SubmitOrderReqField contingentCondition. */
                public contingentCondition: xyz.redtorch.pb.ContingentConditionEnum;

                /** SubmitOrderReqField stopPrice. */
                public stopPrice: number;

                /** SubmitOrderReqField forceCloseReason. */
                public forceCloseReason: xyz.redtorch.pb.ForceCloseReasonEnum;

                /** SubmitOrderReqField autoSuspend. */
                public autoSuspend: number;

                /** SubmitOrderReqField userForceClose. */
                public userForceClose: number;

                /** SubmitOrderReqField swapOrder. */
                public swapOrder: number;

                /**
                 * Creates a new SubmitOrderReqField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubmitOrderReqField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ISubmitOrderReqField): xyz.redtorch.pb.SubmitOrderReqField;

                /**
                 * Encodes the specified SubmitOrderReqField message. Does not implicitly {@link xyz.redtorch.pb.SubmitOrderReqField.verify|verify} messages.
                 * @param message SubmitOrderReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ISubmitOrderReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubmitOrderReqField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.SubmitOrderReqField.verify|verify} messages.
                 * @param message SubmitOrderReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ISubmitOrderReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubmitOrderReqField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubmitOrderReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.SubmitOrderReqField;

                /**
                 * Decodes a SubmitOrderReqField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubmitOrderReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.SubmitOrderReqField;

                /**
                 * Verifies a SubmitOrderReqField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubmitOrderReqField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubmitOrderReqField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.SubmitOrderReqField;

                /**
                 * Creates a plain object from a SubmitOrderReqField message. Also converts values to other types if specified.
                 * @param message SubmitOrderReqField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.SubmitOrderReqField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubmitOrderReqField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CancelOrderReqField. */
            interface ICancelOrderReqField {

                /** CancelOrderReqField originOrderId */
                originOrderId?: (string|null);

                /** CancelOrderReqField orderId */
                orderId?: (string|null);
            }

            /** Represents a CancelOrderReqField. */
            class CancelOrderReqField implements ICancelOrderReqField {

                /**
                 * Constructs a new CancelOrderReqField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ICancelOrderReqField);

                /** CancelOrderReqField originOrderId. */
                public originOrderId: string;

                /** CancelOrderReqField orderId. */
                public orderId: string;

                /**
                 * Creates a new CancelOrderReqField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelOrderReqField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ICancelOrderReqField): xyz.redtorch.pb.CancelOrderReqField;

                /**
                 * Encodes the specified CancelOrderReqField message. Does not implicitly {@link xyz.redtorch.pb.CancelOrderReqField.verify|verify} messages.
                 * @param message CancelOrderReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ICancelOrderReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelOrderReqField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.CancelOrderReqField.verify|verify} messages.
                 * @param message CancelOrderReqField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ICancelOrderReqField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelOrderReqField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CancelOrderReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.CancelOrderReqField;

                /**
                 * Decodes a CancelOrderReqField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CancelOrderReqField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.CancelOrderReqField;

                /**
                 * Verifies a CancelOrderReqField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CancelOrderReqField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CancelOrderReqField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.CancelOrderReqField;

                /**
                 * Creates a plain object from a CancelOrderReqField message. Also converts values to other types if specified.
                 * @param message CancelOrderReqField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.CancelOrderReqField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelOrderReqField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GatewaySettingField. */
            interface IGatewaySettingField {

                /** GatewaySettingField gatewayId */
                gatewayId?: (string|null);

                /** GatewaySettingField gatewayName */
                gatewayName?: (string|null);

                /** GatewaySettingField gatewayDescription */
                gatewayDescription?: (string|null);

                /** GatewaySettingField implementClassName */
                implementClassName?: (string|null);

                /** GatewaySettingField gatewayType */
                gatewayType?: (xyz.redtorch.pb.GatewayTypeEnum|null);

                /** GatewaySettingField gatewayAdapterType */
                gatewayAdapterType?: (xyz.redtorch.pb.GatewayAdapterTypeEnum|null);

                /** GatewaySettingField targetNodeId */
                targetNodeId?: (number|null);

                /** GatewaySettingField autoConnectTimeRanges */
                autoConnectTimeRanges?: (string|null);

                /** GatewaySettingField status */
                status?: (xyz.redtorch.pb.ConnectStatusEnum|null);

                /** GatewaySettingField version */
                version?: (number|Long|null);

                /** GatewaySettingField ctpApiSetting */
                ctpApiSetting?: (xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField|null);

                /** GatewaySettingField ibApiSetting */
                ibApiSetting?: (xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField|null);
            }

            /** Represents a GatewaySettingField. */
            class GatewaySettingField implements IGatewaySettingField {

                /**
                 * Constructs a new GatewaySettingField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IGatewaySettingField);

                /** GatewaySettingField gatewayId. */
                public gatewayId: string;

                /** GatewaySettingField gatewayName. */
                public gatewayName: string;

                /** GatewaySettingField gatewayDescription. */
                public gatewayDescription: string;

                /** GatewaySettingField implementClassName. */
                public implementClassName: string;

                /** GatewaySettingField gatewayType. */
                public gatewayType: xyz.redtorch.pb.GatewayTypeEnum;

                /** GatewaySettingField gatewayAdapterType. */
                public gatewayAdapterType: xyz.redtorch.pb.GatewayAdapterTypeEnum;

                /** GatewaySettingField targetNodeId. */
                public targetNodeId: number;

                /** GatewaySettingField autoConnectTimeRanges. */
                public autoConnectTimeRanges: string;

                /** GatewaySettingField status. */
                public status: xyz.redtorch.pb.ConnectStatusEnum;

                /** GatewaySettingField version. */
                public version: (number|Long);

                /** GatewaySettingField ctpApiSetting. */
                public ctpApiSetting?: (xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField|null);

                /** GatewaySettingField ibApiSetting. */
                public ibApiSetting?: (xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField|null);

                /**
                 * Creates a new GatewaySettingField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GatewaySettingField instance
                 */
                public static create(properties?: xyz.redtorch.pb.IGatewaySettingField): xyz.redtorch.pb.GatewaySettingField;

                /**
                 * Encodes the specified GatewaySettingField message. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.verify|verify} messages.
                 * @param message GatewaySettingField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IGatewaySettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GatewaySettingField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.verify|verify} messages.
                 * @param message GatewaySettingField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IGatewaySettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GatewaySettingField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GatewaySettingField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.GatewaySettingField;

                /**
                 * Decodes a GatewaySettingField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GatewaySettingField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.GatewaySettingField;

                /**
                 * Verifies a GatewaySettingField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GatewaySettingField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GatewaySettingField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.GatewaySettingField;

                /**
                 * Creates a plain object from a GatewaySettingField message. Also converts values to other types if specified.
                 * @param message GatewaySettingField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.GatewaySettingField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GatewaySettingField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace GatewaySettingField {

                /** Properties of a CtpApiSettingField. */
                interface ICtpApiSettingField {

                    /** CtpApiSettingField userId */
                    userId?: (string|null);

                    /** CtpApiSettingField password */
                    password?: (string|null);

                    /** CtpApiSettingField brokerId */
                    brokerId?: (string|null);

                    /** CtpApiSettingField tdHost */
                    tdHost?: (string|null);

                    /** CtpApiSettingField tdPort */
                    tdPort?: (string|null);

                    /** CtpApiSettingField mdHost */
                    mdHost?: (string|null);

                    /** CtpApiSettingField mdPort */
                    mdPort?: (string|null);

                    /** CtpApiSettingField authCode */
                    authCode?: (string|null);

                    /** CtpApiSettingField userProductInfo */
                    userProductInfo?: (string|null);

                    /** CtpApiSettingField appId */
                    appId?: (string|null);
                }

                /** Represents a CtpApiSettingField. */
                class CtpApiSettingField implements ICtpApiSettingField {

                    /**
                     * Constructs a new CtpApiSettingField.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField);

                    /** CtpApiSettingField userId. */
                    public userId: string;

                    /** CtpApiSettingField password. */
                    public password: string;

                    /** CtpApiSettingField brokerId. */
                    public brokerId: string;

                    /** CtpApiSettingField tdHost. */
                    public tdHost: string;

                    /** CtpApiSettingField tdPort. */
                    public tdPort: string;

                    /** CtpApiSettingField mdHost. */
                    public mdHost: string;

                    /** CtpApiSettingField mdPort. */
                    public mdPort: string;

                    /** CtpApiSettingField authCode. */
                    public authCode: string;

                    /** CtpApiSettingField userProductInfo. */
                    public userProductInfo: string;

                    /** CtpApiSettingField appId. */
                    public appId: string;

                    /**
                     * Creates a new CtpApiSettingField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CtpApiSettingField instance
                     */
                    public static create(properties?: xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField): xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField;

                    /**
                     * Encodes the specified CtpApiSettingField message. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField.verify|verify} messages.
                     * @param message CtpApiSettingField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CtpApiSettingField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField.verify|verify} messages.
                     * @param message CtpApiSettingField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: xyz.redtorch.pb.GatewaySettingField.ICtpApiSettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CtpApiSettingField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CtpApiSettingField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField;

                    /**
                     * Decodes a CtpApiSettingField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CtpApiSettingField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField;

                    /**
                     * Verifies a CtpApiSettingField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CtpApiSettingField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CtpApiSettingField
                     */
                    public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField;

                    /**
                     * Creates a plain object from a CtpApiSettingField message. Also converts values to other types if specified.
                     * @param message CtpApiSettingField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: xyz.redtorch.pb.GatewaySettingField.CtpApiSettingField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CtpApiSettingField to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IbApiSettingField. */
                interface IIbApiSettingField {

                    /** IbApiSettingField host */
                    host?: (string|null);

                    /** IbApiSettingField port */
                    port?: (number|null);

                    /** IbApiSettingField clientId */
                    clientId?: (number|null);
                }

                /** Represents an IbApiSettingField. */
                class IbApiSettingField implements IIbApiSettingField {

                    /**
                     * Constructs a new IbApiSettingField.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField);

                    /** IbApiSettingField host. */
                    public host: string;

                    /** IbApiSettingField port. */
                    public port: number;

                    /** IbApiSettingField clientId. */
                    public clientId: number;

                    /**
                     * Creates a new IbApiSettingField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IbApiSettingField instance
                     */
                    public static create(properties?: xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField): xyz.redtorch.pb.GatewaySettingField.IbApiSettingField;

                    /**
                     * Encodes the specified IbApiSettingField message. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.IbApiSettingField.verify|verify} messages.
                     * @param message IbApiSettingField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IbApiSettingField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.GatewaySettingField.IbApiSettingField.verify|verify} messages.
                     * @param message IbApiSettingField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: xyz.redtorch.pb.GatewaySettingField.IIbApiSettingField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IbApiSettingField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IbApiSettingField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.GatewaySettingField.IbApiSettingField;

                    /**
                     * Decodes an IbApiSettingField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IbApiSettingField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.GatewaySettingField.IbApiSettingField;

                    /**
                     * Verifies an IbApiSettingField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IbApiSettingField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IbApiSettingField
                     */
                    public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.GatewaySettingField.IbApiSettingField;

                    /**
                     * Creates a plain object from an IbApiSettingField message. Also converts values to other types if specified.
                     * @param message IbApiSettingField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: xyz.redtorch.pb.GatewaySettingField.IbApiSettingField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IbApiSettingField to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a LogField. */
            interface ILogField {

                /** LogField logLevel */
                logLevel?: (xyz.redtorch.pb.LogLevelEnum|null);

                /** LogField timestamp */
                timestamp?: (number|Long|null);

                /** LogField content */
                content?: (string|null);
            }

            /** Represents a LogField. */
            class LogField implements ILogField {

                /**
                 * Constructs a new LogField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.ILogField);

                /** LogField logLevel. */
                public logLevel: xyz.redtorch.pb.LogLevelEnum;

                /** LogField timestamp. */
                public timestamp: (number|Long);

                /** LogField content. */
                public content: string;

                /**
                 * Creates a new LogField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogField instance
                 */
                public static create(properties?: xyz.redtorch.pb.ILogField): xyz.redtorch.pb.LogField;

                /**
                 * Encodes the specified LogField message. Does not implicitly {@link xyz.redtorch.pb.LogField.verify|verify} messages.
                 * @param message LogField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.ILogField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.LogField.verify|verify} messages.
                 * @param message LogField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.ILogField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.LogField;

                /**
                 * Decodes a LogField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.LogField;

                /**
                 * Verifies a LogField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.LogField;

                /**
                 * Creates a plain object from a LogField message. Also converts values to other types if specified.
                 * @param message LogField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.LogField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NoticeField. */
            interface INoticeField {

                /** NoticeField status */
                status?: (xyz.redtorch.pb.CommonStatusEnum|null);

                /** NoticeField timestamp */
                timestamp?: (number|Long|null);

                /** NoticeField content */
                content?: (string|null);
            }

            /** Represents a NoticeField. */
            class NoticeField implements INoticeField {

                /**
                 * Constructs a new NoticeField.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.INoticeField);

                /** NoticeField status. */
                public status: xyz.redtorch.pb.CommonStatusEnum;

                /** NoticeField timestamp. */
                public timestamp: (number|Long);

                /** NoticeField content. */
                public content: string;

                /**
                 * Creates a new NoticeField instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NoticeField instance
                 */
                public static create(properties?: xyz.redtorch.pb.INoticeField): xyz.redtorch.pb.NoticeField;

                /**
                 * Encodes the specified NoticeField message. Does not implicitly {@link xyz.redtorch.pb.NoticeField.verify|verify} messages.
                 * @param message NoticeField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.INoticeField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NoticeField message, length delimited. Does not implicitly {@link xyz.redtorch.pb.NoticeField.verify|verify} messages.
                 * @param message NoticeField message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.INoticeField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NoticeField message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NoticeField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.NoticeField;

                /**
                 * Decodes a NoticeField message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NoticeField
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.NoticeField;

                /**
                 * Verifies a NoticeField message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NoticeField message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NoticeField
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.NoticeField;

                /**
                 * Creates a plain object from a NoticeField message. Also converts values to other types if specified.
                 * @param message NoticeField
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.NoticeField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NoticeField to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSubscribeReq. */
            interface IRpcSubscribeReq {

                /** RpcSubscribeReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSubscribeReq contract */
                contract?: (xyz.redtorch.pb.IContractField|null);
            }

            /** Represents a RpcSubscribeReq. */
            class RpcSubscribeReq implements IRpcSubscribeReq {

                /**
                 * Constructs a new RpcSubscribeReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSubscribeReq);

                /** RpcSubscribeReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSubscribeReq contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /**
                 * Creates a new RpcSubscribeReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSubscribeReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSubscribeReq): xyz.redtorch.pb.RpcSubscribeReq;

                /**
                 * Encodes the specified RpcSubscribeReq message. Does not implicitly {@link xyz.redtorch.pb.RpcSubscribeReq.verify|verify} messages.
                 * @param message RpcSubscribeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSubscribeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSubscribeReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSubscribeReq.verify|verify} messages.
                 * @param message RpcSubscribeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSubscribeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSubscribeReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSubscribeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSubscribeReq;

                /**
                 * Decodes a RpcSubscribeReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSubscribeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSubscribeReq;

                /**
                 * Verifies a RpcSubscribeReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSubscribeReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSubscribeReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSubscribeReq;

                /**
                 * Creates a plain object from a RpcSubscribeReq message. Also converts values to other types if specified.
                 * @param message RpcSubscribeReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSubscribeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSubscribeReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSubscribeRsp. */
            interface IRpcSubscribeRsp {

                /** RpcSubscribeRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);
            }

            /** Represents a RpcSubscribeRsp. */
            class RpcSubscribeRsp implements IRpcSubscribeRsp {

                /**
                 * Constructs a new RpcSubscribeRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSubscribeRsp);

                /** RpcSubscribeRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /**
                 * Creates a new RpcSubscribeRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSubscribeRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSubscribeRsp): xyz.redtorch.pb.RpcSubscribeRsp;

                /**
                 * Encodes the specified RpcSubscribeRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcSubscribeRsp.verify|verify} messages.
                 * @param message RpcSubscribeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSubscribeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSubscribeRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSubscribeRsp.verify|verify} messages.
                 * @param message RpcSubscribeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSubscribeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSubscribeRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSubscribeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSubscribeRsp;

                /**
                 * Decodes a RpcSubscribeRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSubscribeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSubscribeRsp;

                /**
                 * Verifies a RpcSubscribeRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSubscribeRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSubscribeRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSubscribeRsp;

                /**
                 * Creates a plain object from a RpcSubscribeRsp message. Also converts values to other types if specified.
                 * @param message RpcSubscribeRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSubscribeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSubscribeRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcUnsubscribeReq. */
            interface IRpcUnsubscribeReq {

                /** RpcUnsubscribeReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcUnsubscribeReq contract */
                contract?: (xyz.redtorch.pb.IContractField|null);

                /** RpcUnsubscribeReq gatewayId */
                gatewayId?: (string|null);
            }

            /** Represents a RpcUnsubscribeReq. */
            class RpcUnsubscribeReq implements IRpcUnsubscribeReq {

                /**
                 * Constructs a new RpcUnsubscribeReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcUnsubscribeReq);

                /** RpcUnsubscribeReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcUnsubscribeReq contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /** RpcUnsubscribeReq gatewayId. */
                public gatewayId: string;

                /**
                 * Creates a new RpcUnsubscribeReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcUnsubscribeReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcUnsubscribeReq): xyz.redtorch.pb.RpcUnsubscribeReq;

                /**
                 * Encodes the specified RpcUnsubscribeReq message. Does not implicitly {@link xyz.redtorch.pb.RpcUnsubscribeReq.verify|verify} messages.
                 * @param message RpcUnsubscribeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcUnsubscribeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcUnsubscribeReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcUnsubscribeReq.verify|verify} messages.
                 * @param message RpcUnsubscribeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcUnsubscribeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcUnsubscribeReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcUnsubscribeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcUnsubscribeReq;

                /**
                 * Decodes a RpcUnsubscribeReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcUnsubscribeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcUnsubscribeReq;

                /**
                 * Verifies a RpcUnsubscribeReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcUnsubscribeReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcUnsubscribeReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcUnsubscribeReq;

                /**
                 * Creates a plain object from a RpcUnsubscribeReq message. Also converts values to other types if specified.
                 * @param message RpcUnsubscribeReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcUnsubscribeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcUnsubscribeReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcUnsubscribeRsp. */
            interface IRpcUnsubscribeRsp {

                /** RpcUnsubscribeRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);
            }

            /** Represents a RpcUnsubscribeRsp. */
            class RpcUnsubscribeRsp implements IRpcUnsubscribeRsp {

                /**
                 * Constructs a new RpcUnsubscribeRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcUnsubscribeRsp);

                /** RpcUnsubscribeRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /**
                 * Creates a new RpcUnsubscribeRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcUnsubscribeRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcUnsubscribeRsp): xyz.redtorch.pb.RpcUnsubscribeRsp;

                /**
                 * Encodes the specified RpcUnsubscribeRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcUnsubscribeRsp.verify|verify} messages.
                 * @param message RpcUnsubscribeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcUnsubscribeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcUnsubscribeRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcUnsubscribeRsp.verify|verify} messages.
                 * @param message RpcUnsubscribeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcUnsubscribeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcUnsubscribeRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcUnsubscribeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcUnsubscribeRsp;

                /**
                 * Decodes a RpcUnsubscribeRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcUnsubscribeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcUnsubscribeRsp;

                /**
                 * Verifies a RpcUnsubscribeRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcUnsubscribeRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcUnsubscribeRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcUnsubscribeRsp;

                /**
                 * Creates a plain object from a RpcUnsubscribeRsp message. Also converts values to other types if specified.
                 * @param message RpcUnsubscribeRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcUnsubscribeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcUnsubscribeRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSubmitOrderReq. */
            interface IRpcSubmitOrderReq {

                /** RpcSubmitOrderReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSubmitOrderReq submitOrderReq */
                submitOrderReq?: (xyz.redtorch.pb.ISubmitOrderReqField|null);
            }

            /** Represents a RpcSubmitOrderReq. */
            class RpcSubmitOrderReq implements IRpcSubmitOrderReq {

                /**
                 * Constructs a new RpcSubmitOrderReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSubmitOrderReq);

                /** RpcSubmitOrderReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSubmitOrderReq submitOrderReq. */
                public submitOrderReq?: (xyz.redtorch.pb.ISubmitOrderReqField|null);

                /**
                 * Creates a new RpcSubmitOrderReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSubmitOrderReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSubmitOrderReq): xyz.redtorch.pb.RpcSubmitOrderReq;

                /**
                 * Encodes the specified RpcSubmitOrderReq message. Does not implicitly {@link xyz.redtorch.pb.RpcSubmitOrderReq.verify|verify} messages.
                 * @param message RpcSubmitOrderReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSubmitOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSubmitOrderReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSubmitOrderReq.verify|verify} messages.
                 * @param message RpcSubmitOrderReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSubmitOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSubmitOrderReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSubmitOrderReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSubmitOrderReq;

                /**
                 * Decodes a RpcSubmitOrderReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSubmitOrderReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSubmitOrderReq;

                /**
                 * Verifies a RpcSubmitOrderReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSubmitOrderReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSubmitOrderReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSubmitOrderReq;

                /**
                 * Creates a plain object from a RpcSubmitOrderReq message. Also converts values to other types if specified.
                 * @param message RpcSubmitOrderReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSubmitOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSubmitOrderReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSubmitOrderRsp. */
            interface IRpcSubmitOrderRsp {

                /** RpcSubmitOrderRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcSubmitOrderRsp orderId */
                orderId?: (string|null);
            }

            /** Represents a RpcSubmitOrderRsp. */
            class RpcSubmitOrderRsp implements IRpcSubmitOrderRsp {

                /**
                 * Constructs a new RpcSubmitOrderRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSubmitOrderRsp);

                /** RpcSubmitOrderRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcSubmitOrderRsp orderId. */
                public orderId: string;

                /**
                 * Creates a new RpcSubmitOrderRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSubmitOrderRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSubmitOrderRsp): xyz.redtorch.pb.RpcSubmitOrderRsp;

                /**
                 * Encodes the specified RpcSubmitOrderRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcSubmitOrderRsp.verify|verify} messages.
                 * @param message RpcSubmitOrderRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSubmitOrderRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSubmitOrderRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSubmitOrderRsp.verify|verify} messages.
                 * @param message RpcSubmitOrderRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSubmitOrderRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSubmitOrderRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSubmitOrderRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSubmitOrderRsp;

                /**
                 * Decodes a RpcSubmitOrderRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSubmitOrderRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSubmitOrderRsp;

                /**
                 * Verifies a RpcSubmitOrderRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSubmitOrderRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSubmitOrderRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSubmitOrderRsp;

                /**
                 * Creates a plain object from a RpcSubmitOrderRsp message. Also converts values to other types if specified.
                 * @param message RpcSubmitOrderRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSubmitOrderRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSubmitOrderRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcCancelOrderReq. */
            interface IRpcCancelOrderReq {

                /** RpcCancelOrderReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcCancelOrderReq cancelOrderReq */
                cancelOrderReq?: (xyz.redtorch.pb.ICancelOrderReqField|null);
            }

            /** Represents a RpcCancelOrderReq. */
            class RpcCancelOrderReq implements IRpcCancelOrderReq {

                /**
                 * Constructs a new RpcCancelOrderReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcCancelOrderReq);

                /** RpcCancelOrderReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcCancelOrderReq cancelOrderReq. */
                public cancelOrderReq?: (xyz.redtorch.pb.ICancelOrderReqField|null);

                /**
                 * Creates a new RpcCancelOrderReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcCancelOrderReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcCancelOrderReq): xyz.redtorch.pb.RpcCancelOrderReq;

                /**
                 * Encodes the specified RpcCancelOrderReq message. Does not implicitly {@link xyz.redtorch.pb.RpcCancelOrderReq.verify|verify} messages.
                 * @param message RpcCancelOrderReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcCancelOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcCancelOrderReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcCancelOrderReq.verify|verify} messages.
                 * @param message RpcCancelOrderReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcCancelOrderReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcCancelOrderReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcCancelOrderReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcCancelOrderReq;

                /**
                 * Decodes a RpcCancelOrderReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcCancelOrderReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcCancelOrderReq;

                /**
                 * Verifies a RpcCancelOrderReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcCancelOrderReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcCancelOrderReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcCancelOrderReq;

                /**
                 * Creates a plain object from a RpcCancelOrderReq message. Also converts values to other types if specified.
                 * @param message RpcCancelOrderReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcCancelOrderReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcCancelOrderReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcCancelOrderRsp. */
            interface IRpcCancelOrderRsp {

                /** RpcCancelOrderRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);
            }

            /** Represents a RpcCancelOrderRsp. */
            class RpcCancelOrderRsp implements IRpcCancelOrderRsp {

                /**
                 * Constructs a new RpcCancelOrderRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcCancelOrderRsp);

                /** RpcCancelOrderRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /**
                 * Creates a new RpcCancelOrderRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcCancelOrderRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcCancelOrderRsp): xyz.redtorch.pb.RpcCancelOrderRsp;

                /**
                 * Encodes the specified RpcCancelOrderRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcCancelOrderRsp.verify|verify} messages.
                 * @param message RpcCancelOrderRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcCancelOrderRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcCancelOrderRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcCancelOrderRsp.verify|verify} messages.
                 * @param message RpcCancelOrderRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcCancelOrderRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcCancelOrderRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcCancelOrderRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcCancelOrderRsp;

                /**
                 * Decodes a RpcCancelOrderRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcCancelOrderRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcCancelOrderRsp;

                /**
                 * Verifies a RpcCancelOrderRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcCancelOrderRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcCancelOrderRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcCancelOrderRsp;

                /**
                 * Creates a plain object from a RpcCancelOrderRsp message. Also converts values to other types if specified.
                 * @param message RpcCancelOrderRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcCancelOrderRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcCancelOrderRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSearchContractReq. */
            interface IRpcSearchContractReq {

                /** RpcSearchContractReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSearchContractReq contract */
                contract?: (xyz.redtorch.pb.IContractField|null);
            }

            /** Represents a RpcSearchContractReq. */
            class RpcSearchContractReq implements IRpcSearchContractReq {

                /**
                 * Constructs a new RpcSearchContractReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSearchContractReq);

                /** RpcSearchContractReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSearchContractReq contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /**
                 * Creates a new RpcSearchContractReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSearchContractReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSearchContractReq): xyz.redtorch.pb.RpcSearchContractReq;

                /**
                 * Encodes the specified RpcSearchContractReq message. Does not implicitly {@link xyz.redtorch.pb.RpcSearchContractReq.verify|verify} messages.
                 * @param message RpcSearchContractReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSearchContractReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSearchContractReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSearchContractReq.verify|verify} messages.
                 * @param message RpcSearchContractReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSearchContractReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSearchContractReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSearchContractReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSearchContractReq;

                /**
                 * Decodes a RpcSearchContractReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSearchContractReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSearchContractReq;

                /**
                 * Verifies a RpcSearchContractReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSearchContractReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSearchContractReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSearchContractReq;

                /**
                 * Creates a plain object from a RpcSearchContractReq message. Also converts values to other types if specified.
                 * @param message RpcSearchContractReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSearchContractReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSearchContractReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSearchContractRsp. */
            interface IRpcSearchContractRsp {

                /** RpcSearchContractRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);
            }

            /** Represents a RpcSearchContractRsp. */
            class RpcSearchContractRsp implements IRpcSearchContractRsp {

                /**
                 * Constructs a new RpcSearchContractRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSearchContractRsp);

                /** RpcSearchContractRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /**
                 * Creates a new RpcSearchContractRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSearchContractRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSearchContractRsp): xyz.redtorch.pb.RpcSearchContractRsp;

                /**
                 * Encodes the specified RpcSearchContractRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcSearchContractRsp.verify|verify} messages.
                 * @param message RpcSearchContractRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSearchContractRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSearchContractRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSearchContractRsp.verify|verify} messages.
                 * @param message RpcSearchContractRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSearchContractRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSearchContractRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSearchContractRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSearchContractRsp;

                /**
                 * Decodes a RpcSearchContractRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSearchContractRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSearchContractRsp;

                /**
                 * Verifies a RpcSearchContractRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSearchContractRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSearchContractRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSearchContractRsp;

                /**
                 * Creates a plain object from a RpcSearchContractRsp message. Also converts values to other types if specified.
                 * @param message RpcSearchContractRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSearchContractRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSearchContractRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetOrderListReq. */
            interface IRpcGetOrderListReq {

                /** RpcGetOrderListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetOrderListReq. */
            class RpcGetOrderListReq implements IRpcGetOrderListReq {

                /**
                 * Constructs a new RpcGetOrderListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetOrderListReq);

                /** RpcGetOrderListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetOrderListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetOrderListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetOrderListReq): xyz.redtorch.pb.RpcGetOrderListReq;

                /**
                 * Encodes the specified RpcGetOrderListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetOrderListReq.verify|verify} messages.
                 * @param message RpcGetOrderListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetOrderListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetOrderListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetOrderListReq.verify|verify} messages.
                 * @param message RpcGetOrderListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetOrderListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetOrderListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetOrderListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetOrderListReq;

                /**
                 * Decodes a RpcGetOrderListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetOrderListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetOrderListReq;

                /**
                 * Verifies a RpcGetOrderListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetOrderListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetOrderListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetOrderListReq;

                /**
                 * Creates a plain object from a RpcGetOrderListReq message. Also converts values to other types if specified.
                 * @param message RpcGetOrderListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetOrderListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetOrderListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetOrderListRsp. */
            interface IRpcGetOrderListRsp {

                /** RpcGetOrderListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetOrderListRsp order */
                order?: (xyz.redtorch.pb.IOrderField[]|null);
            }

            /** Represents a RpcGetOrderListRsp. */
            class RpcGetOrderListRsp implements IRpcGetOrderListRsp {

                /**
                 * Constructs a new RpcGetOrderListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetOrderListRsp);

                /** RpcGetOrderListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetOrderListRsp order. */
                public order: xyz.redtorch.pb.IOrderField[];

                /**
                 * Creates a new RpcGetOrderListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetOrderListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetOrderListRsp): xyz.redtorch.pb.RpcGetOrderListRsp;

                /**
                 * Encodes the specified RpcGetOrderListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetOrderListRsp.verify|verify} messages.
                 * @param message RpcGetOrderListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetOrderListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetOrderListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetOrderListRsp.verify|verify} messages.
                 * @param message RpcGetOrderListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetOrderListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetOrderListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetOrderListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetOrderListRsp;

                /**
                 * Decodes a RpcGetOrderListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetOrderListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetOrderListRsp;

                /**
                 * Verifies a RpcGetOrderListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetOrderListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetOrderListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetOrderListRsp;

                /**
                 * Creates a plain object from a RpcGetOrderListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetOrderListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetOrderListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetOrderListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetWorkingOrderListReq. */
            interface IRpcGetWorkingOrderListReq {

                /** RpcGetWorkingOrderListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetWorkingOrderListReq. */
            class RpcGetWorkingOrderListReq implements IRpcGetWorkingOrderListReq {

                /**
                 * Constructs a new RpcGetWorkingOrderListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetWorkingOrderListReq);

                /** RpcGetWorkingOrderListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetWorkingOrderListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetWorkingOrderListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetWorkingOrderListReq): xyz.redtorch.pb.RpcGetWorkingOrderListReq;

                /**
                 * Encodes the specified RpcGetWorkingOrderListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetWorkingOrderListReq.verify|verify} messages.
                 * @param message RpcGetWorkingOrderListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetWorkingOrderListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetWorkingOrderListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetWorkingOrderListReq.verify|verify} messages.
                 * @param message RpcGetWorkingOrderListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetWorkingOrderListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetWorkingOrderListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetWorkingOrderListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetWorkingOrderListReq;

                /**
                 * Decodes a RpcGetWorkingOrderListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetWorkingOrderListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetWorkingOrderListReq;

                /**
                 * Verifies a RpcGetWorkingOrderListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetWorkingOrderListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetWorkingOrderListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetWorkingOrderListReq;

                /**
                 * Creates a plain object from a RpcGetWorkingOrderListReq message. Also converts values to other types if specified.
                 * @param message RpcGetWorkingOrderListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetWorkingOrderListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetWorkingOrderListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetWorkingOrderListRsp. */
            interface IRpcGetWorkingOrderListRsp {

                /** RpcGetWorkingOrderListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetWorkingOrderListRsp order */
                order?: (xyz.redtorch.pb.IOrderField[]|null);
            }

            /** Represents a RpcGetWorkingOrderListRsp. */
            class RpcGetWorkingOrderListRsp implements IRpcGetWorkingOrderListRsp {

                /**
                 * Constructs a new RpcGetWorkingOrderListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetWorkingOrderListRsp);

                /** RpcGetWorkingOrderListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetWorkingOrderListRsp order. */
                public order: xyz.redtorch.pb.IOrderField[];

                /**
                 * Creates a new RpcGetWorkingOrderListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetWorkingOrderListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetWorkingOrderListRsp): xyz.redtorch.pb.RpcGetWorkingOrderListRsp;

                /**
                 * Encodes the specified RpcGetWorkingOrderListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetWorkingOrderListRsp.verify|verify} messages.
                 * @param message RpcGetWorkingOrderListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetWorkingOrderListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetWorkingOrderListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetWorkingOrderListRsp.verify|verify} messages.
                 * @param message RpcGetWorkingOrderListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetWorkingOrderListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetWorkingOrderListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetWorkingOrderListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetWorkingOrderListRsp;

                /**
                 * Decodes a RpcGetWorkingOrderListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetWorkingOrderListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetWorkingOrderListRsp;

                /**
                 * Verifies a RpcGetWorkingOrderListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetWorkingOrderListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetWorkingOrderListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetWorkingOrderListRsp;

                /**
                 * Creates a plain object from a RpcGetWorkingOrderListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetWorkingOrderListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetWorkingOrderListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetWorkingOrderListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderByOrderIdReq. */
            interface IRpcQueryOrderByOrderIdReq {

                /** RpcQueryOrderByOrderIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderByOrderIdReq orderId */
                orderId?: (string|null);
            }

            /** Represents a RpcQueryOrderByOrderIdReq. */
            class RpcQueryOrderByOrderIdReq implements IRpcQueryOrderByOrderIdReq {

                /**
                 * Constructs a new RpcQueryOrderByOrderIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderByOrderIdReq);

                /** RpcQueryOrderByOrderIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderByOrderIdReq orderId. */
                public orderId: string;

                /**
                 * Creates a new RpcQueryOrderByOrderIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderByOrderIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderByOrderIdReq): xyz.redtorch.pb.RpcQueryOrderByOrderIdReq;

                /**
                 * Encodes the specified RpcQueryOrderByOrderIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderByOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderByOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderByOrderIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderByOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderByOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderByOrderIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderByOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderByOrderIdReq;

                /**
                 * Decodes a RpcQueryOrderByOrderIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderByOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderByOrderIdReq;

                /**
                 * Verifies a RpcQueryOrderByOrderIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderByOrderIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderByOrderIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderByOrderIdReq;

                /**
                 * Creates a plain object from a RpcQueryOrderByOrderIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderByOrderIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderByOrderIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderByOrderIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderByOrderIdRsp. */
            interface IRpcQueryOrderByOrderIdRsp {

                /** RpcQueryOrderByOrderIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderByOrderIdRsp order */
                order?: (xyz.redtorch.pb.IOrderField|null);
            }

            /** Represents a RpcQueryOrderByOrderIdRsp. */
            class RpcQueryOrderByOrderIdRsp implements IRpcQueryOrderByOrderIdRsp {

                /**
                 * Constructs a new RpcQueryOrderByOrderIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderByOrderIdRsp);

                /** RpcQueryOrderByOrderIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderByOrderIdRsp order. */
                public order?: (xyz.redtorch.pb.IOrderField|null);

                /**
                 * Creates a new RpcQueryOrderByOrderIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderByOrderIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderByOrderIdRsp): xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp;

                /**
                 * Encodes the specified RpcQueryOrderByOrderIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderByOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderByOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderByOrderIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderByOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderByOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderByOrderIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderByOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp;

                /**
                 * Decodes a RpcQueryOrderByOrderIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderByOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp;

                /**
                 * Verifies a RpcQueryOrderByOrderIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderByOrderIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderByOrderIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp;

                /**
                 * Creates a plain object from a RpcQueryOrderByOrderIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderByOrderIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderByOrderIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderByOrderIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderByOriginOrderIdReq. */
            interface IRpcQueryOrderByOriginOrderIdReq {

                /** RpcQueryOrderByOriginOrderIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderByOriginOrderIdReq originOrderId */
                originOrderId?: (string|null);
            }

            /** Represents a RpcQueryOrderByOriginOrderIdReq. */
            class RpcQueryOrderByOriginOrderIdReq implements IRpcQueryOrderByOriginOrderIdReq {

                /**
                 * Constructs a new RpcQueryOrderByOriginOrderIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdReq);

                /** RpcQueryOrderByOriginOrderIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderByOriginOrderIdReq originOrderId. */
                public originOrderId: string;

                /**
                 * Creates a new RpcQueryOrderByOriginOrderIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderByOriginOrderIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdReq): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq;

                /**
                 * Encodes the specified RpcQueryOrderByOriginOrderIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderByOriginOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderByOriginOrderIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderByOriginOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderByOriginOrderIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderByOriginOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq;

                /**
                 * Decodes a RpcQueryOrderByOriginOrderIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderByOriginOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq;

                /**
                 * Verifies a RpcQueryOrderByOriginOrderIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderByOriginOrderIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderByOriginOrderIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq;

                /**
                 * Creates a plain object from a RpcQueryOrderByOriginOrderIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderByOriginOrderIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderByOriginOrderIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderByOriginOrderIdRsp. */
            interface IRpcQueryOrderByOriginOrderIdRsp {

                /** RpcQueryOrderByOriginOrderIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderByOriginOrderIdRsp order */
                order?: (xyz.redtorch.pb.IOrderField|null);
            }

            /** Represents a RpcQueryOrderByOriginOrderIdRsp. */
            class RpcQueryOrderByOriginOrderIdRsp implements IRpcQueryOrderByOriginOrderIdRsp {

                /**
                 * Constructs a new RpcQueryOrderByOriginOrderIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdRsp);

                /** RpcQueryOrderByOriginOrderIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderByOriginOrderIdRsp order. */
                public order?: (xyz.redtorch.pb.IOrderField|null);

                /**
                 * Creates a new RpcQueryOrderByOriginOrderIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderByOriginOrderIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdRsp): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp;

                /**
                 * Encodes the specified RpcQueryOrderByOriginOrderIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderByOriginOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderByOriginOrderIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderByOriginOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderByOriginOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderByOriginOrderIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderByOriginOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp;

                /**
                 * Decodes a RpcQueryOrderByOriginOrderIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderByOriginOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp;

                /**
                 * Verifies a RpcQueryOrderByOriginOrderIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderByOriginOrderIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderByOriginOrderIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp;

                /**
                 * Creates a plain object from a RpcQueryOrderByOriginOrderIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderByOriginOrderIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderByOriginOrderIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderByOriginOrderIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderListByAccountIdReq. */
            interface IRpcQueryOrderListByAccountIdReq {

                /** RpcQueryOrderListByAccountIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderListByAccountIdReq accountId */
                accountId?: (string|null);
            }

            /** Represents a RpcQueryOrderListByAccountIdReq. */
            class RpcQueryOrderListByAccountIdReq implements IRpcQueryOrderListByAccountIdReq {

                /**
                 * Constructs a new RpcQueryOrderListByAccountIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdReq);

                /** RpcQueryOrderListByAccountIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderListByAccountIdReq accountId. */
                public accountId: string;

                /**
                 * Creates a new RpcQueryOrderListByAccountIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderListByAccountIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdReq): xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq;

                /**
                 * Encodes the specified RpcQueryOrderListByAccountIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderListByAccountIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryOrderListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderListByAccountIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq;

                /**
                 * Decodes a RpcQueryOrderListByAccountIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq;

                /**
                 * Verifies a RpcQueryOrderListByAccountIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderListByAccountIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderListByAccountIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq;

                /**
                 * Creates a plain object from a RpcQueryOrderListByAccountIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderListByAccountIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderListByAccountIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderListByAccountIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderListByAccountIdRsp. */
            interface IRpcQueryOrderListByAccountIdRsp {

                /** RpcQueryOrderListByAccountIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderListByAccountIdRsp order */
                order?: (xyz.redtorch.pb.IOrderField[]|null);
            }

            /** Represents a RpcQueryOrderListByAccountIdRsp. */
            class RpcQueryOrderListByAccountIdRsp implements IRpcQueryOrderListByAccountIdRsp {

                /**
                 * Constructs a new RpcQueryOrderListByAccountIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdRsp);

                /** RpcQueryOrderListByAccountIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderListByAccountIdRsp order. */
                public order: xyz.redtorch.pb.IOrderField[];

                /**
                 * Creates a new RpcQueryOrderListByAccountIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderListByAccountIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdRsp): xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp;

                /**
                 * Encodes the specified RpcQueryOrderListByAccountIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderListByAccountIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryOrderListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderListByAccountIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp;

                /**
                 * Decodes a RpcQueryOrderListByAccountIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp;

                /**
                 * Verifies a RpcQueryOrderListByAccountIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderListByAccountIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderListByAccountIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp;

                /**
                 * Creates a plain object from a RpcQueryOrderListByAccountIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderListByAccountIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderListByAccountIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderListByAccountIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderListByUniformSymbolReq. */
            interface IRpcQueryOrderListByUniformSymbolReq {

                /** RpcQueryOrderListByUniformSymbolReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderListByUniformSymbolReq uniformSymbol */
                uniformSymbol?: (string|null);
            }

            /** Represents a RpcQueryOrderListByUniformSymbolReq. */
            class RpcQueryOrderListByUniformSymbolReq implements IRpcQueryOrderListByUniformSymbolReq {

                /**
                 * Constructs a new RpcQueryOrderListByUniformSymbolReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolReq);

                /** RpcQueryOrderListByUniformSymbolReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryOrderListByUniformSymbolReq uniformSymbol. */
                public uniformSymbol: string;

                /**
                 * Creates a new RpcQueryOrderListByUniformSymbolReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderListByUniformSymbolReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolReq): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq;

                /**
                 * Encodes the specified RpcQueryOrderListByUniformSymbolReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryOrderListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderListByUniformSymbolReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryOrderListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderListByUniformSymbolReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq;

                /**
                 * Decodes a RpcQueryOrderListByUniformSymbolReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq;

                /**
                 * Verifies a RpcQueryOrderListByUniformSymbolReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderListByUniformSymbolReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderListByUniformSymbolReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq;

                /**
                 * Creates a plain object from a RpcQueryOrderListByUniformSymbolReq message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderListByUniformSymbolReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderListByUniformSymbolReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryOrderListByUniformSymbolRsp. */
            interface IRpcQueryOrderListByUniformSymbolRsp {

                /** RpcQueryOrderListByUniformSymbolRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderListByUniformSymbolRsp order */
                order?: (xyz.redtorch.pb.IOrderField[]|null);
            }

            /** Represents a RpcQueryOrderListByUniformSymbolRsp. */
            class RpcQueryOrderListByUniformSymbolRsp implements IRpcQueryOrderListByUniformSymbolRsp {

                /**
                 * Constructs a new RpcQueryOrderListByUniformSymbolRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolRsp);

                /** RpcQueryOrderListByUniformSymbolRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryOrderListByUniformSymbolRsp order. */
                public order: xyz.redtorch.pb.IOrderField[];

                /**
                 * Creates a new RpcQueryOrderListByUniformSymbolRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryOrderListByUniformSymbolRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolRsp): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp;

                /**
                 * Encodes the specified RpcQueryOrderListByUniformSymbolRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryOrderListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryOrderListByUniformSymbolRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryOrderListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryOrderListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryOrderListByUniformSymbolRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryOrderListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp;

                /**
                 * Decodes a RpcQueryOrderListByUniformSymbolRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryOrderListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp;

                /**
                 * Verifies a RpcQueryOrderListByUniformSymbolRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryOrderListByUniformSymbolRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryOrderListByUniformSymbolRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp;

                /**
                 * Creates a plain object from a RpcQueryOrderListByUniformSymbolRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryOrderListByUniformSymbolRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryOrderListByUniformSymbolRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryOrderListByUniformSymbolRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetTradeListReq. */
            interface IRpcGetTradeListReq {

                /** RpcGetTradeListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetTradeListReq. */
            class RpcGetTradeListReq implements IRpcGetTradeListReq {

                /**
                 * Constructs a new RpcGetTradeListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetTradeListReq);

                /** RpcGetTradeListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetTradeListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetTradeListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetTradeListReq): xyz.redtorch.pb.RpcGetTradeListReq;

                /**
                 * Encodes the specified RpcGetTradeListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetTradeListReq.verify|verify} messages.
                 * @param message RpcGetTradeListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetTradeListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetTradeListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetTradeListReq.verify|verify} messages.
                 * @param message RpcGetTradeListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetTradeListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetTradeListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetTradeListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetTradeListReq;

                /**
                 * Decodes a RpcGetTradeListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetTradeListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetTradeListReq;

                /**
                 * Verifies a RpcGetTradeListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetTradeListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetTradeListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetTradeListReq;

                /**
                 * Creates a plain object from a RpcGetTradeListReq message. Also converts values to other types if specified.
                 * @param message RpcGetTradeListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetTradeListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetTradeListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetTradeListRsp. */
            interface IRpcGetTradeListRsp {

                /** RpcGetTradeListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetTradeListRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcGetTradeListRsp. */
            class RpcGetTradeListRsp implements IRpcGetTradeListRsp {

                /**
                 * Constructs a new RpcGetTradeListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetTradeListRsp);

                /** RpcGetTradeListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetTradeListRsp trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcGetTradeListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetTradeListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetTradeListRsp): xyz.redtorch.pb.RpcGetTradeListRsp;

                /**
                 * Encodes the specified RpcGetTradeListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetTradeListRsp.verify|verify} messages.
                 * @param message RpcGetTradeListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetTradeListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetTradeListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetTradeListRsp.verify|verify} messages.
                 * @param message RpcGetTradeListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetTradeListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetTradeListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetTradeListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetTradeListRsp;

                /**
                 * Decodes a RpcGetTradeListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetTradeListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetTradeListRsp;

                /**
                 * Verifies a RpcGetTradeListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetTradeListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetTradeListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetTradeListRsp;

                /**
                 * Creates a plain object from a RpcGetTradeListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetTradeListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetTradeListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetTradeListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeByTradeIdReq. */
            interface IRpcQueryTradeByTradeIdReq {

                /** RpcQueryTradeByTradeIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeByTradeIdReq tradeId */
                tradeId?: (string|null);
            }

            /** Represents a RpcQueryTradeByTradeIdReq. */
            class RpcQueryTradeByTradeIdReq implements IRpcQueryTradeByTradeIdReq {

                /**
                 * Constructs a new RpcQueryTradeByTradeIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeByTradeIdReq);

                /** RpcQueryTradeByTradeIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeByTradeIdReq tradeId. */
                public tradeId: string;

                /**
                 * Creates a new RpcQueryTradeByTradeIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeByTradeIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeByTradeIdReq): xyz.redtorch.pb.RpcQueryTradeByTradeIdReq;

                /**
                 * Encodes the specified RpcQueryTradeByTradeIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeByTradeIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeByTradeIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeByTradeIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeByTradeIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeByTradeIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeByTradeIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeByTradeIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeByTradeIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeByTradeIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeByTradeIdReq;

                /**
                 * Decodes a RpcQueryTradeByTradeIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeByTradeIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeByTradeIdReq;

                /**
                 * Verifies a RpcQueryTradeByTradeIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeByTradeIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeByTradeIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeByTradeIdReq;

                /**
                 * Creates a plain object from a RpcQueryTradeByTradeIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeByTradeIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeByTradeIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeByTradeIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeByTradeIdRsp. */
            interface IRpcQueryTradeByTradeIdRsp {

                /** RpcQueryTradeByTradeIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeByTradeIdRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField|null);
            }

            /** Represents a RpcQueryTradeByTradeIdRsp. */
            class RpcQueryTradeByTradeIdRsp implements IRpcQueryTradeByTradeIdRsp {

                /**
                 * Constructs a new RpcQueryTradeByTradeIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeByTradeIdRsp);

                /** RpcQueryTradeByTradeIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeByTradeIdRsp trade. */
                public trade?: (xyz.redtorch.pb.ITradeField|null);

                /**
                 * Creates a new RpcQueryTradeByTradeIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeByTradeIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeByTradeIdRsp): xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp;

                /**
                 * Encodes the specified RpcQueryTradeByTradeIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeByTradeIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeByTradeIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeByTradeIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeByTradeIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeByTradeIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeByTradeIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeByTradeIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp;

                /**
                 * Decodes a RpcQueryTradeByTradeIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeByTradeIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp;

                /**
                 * Verifies a RpcQueryTradeByTradeIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeByTradeIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeByTradeIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp;

                /**
                 * Creates a plain object from a RpcQueryTradeByTradeIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeByTradeIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeByTradeIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeByTradeIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByUniformSymbolReq. */
            interface IRpcQueryTradeListByUniformSymbolReq {

                /** RpcQueryTradeListByUniformSymbolReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByUniformSymbolReq uniformSymbol */
                uniformSymbol?: (string|null);
            }

            /** Represents a RpcQueryTradeListByUniformSymbolReq. */
            class RpcQueryTradeListByUniformSymbolReq implements IRpcQueryTradeListByUniformSymbolReq {

                /**
                 * Constructs a new RpcQueryTradeListByUniformSymbolReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolReq);

                /** RpcQueryTradeListByUniformSymbolReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByUniformSymbolReq uniformSymbol. */
                public uniformSymbol: string;

                /**
                 * Creates a new RpcQueryTradeListByUniformSymbolReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByUniformSymbolReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolReq): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq;

                /**
                 * Encodes the specified RpcQueryTradeListByUniformSymbolReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByUniformSymbolReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByUniformSymbolReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq;

                /**
                 * Decodes a RpcQueryTradeListByUniformSymbolReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq;

                /**
                 * Verifies a RpcQueryTradeListByUniformSymbolReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByUniformSymbolReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByUniformSymbolReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq;

                /**
                 * Creates a plain object from a RpcQueryTradeListByUniformSymbolReq message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByUniformSymbolReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByUniformSymbolReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByUniformSymbolRsp. */
            interface IRpcQueryTradeListByUniformSymbolRsp {

                /** RpcQueryTradeListByUniformSymbolRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByUniformSymbolRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcQueryTradeListByUniformSymbolRsp. */
            class RpcQueryTradeListByUniformSymbolRsp implements IRpcQueryTradeListByUniformSymbolRsp {

                /**
                 * Constructs a new RpcQueryTradeListByUniformSymbolRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolRsp);

                /** RpcQueryTradeListByUniformSymbolRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByUniformSymbolRsp trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcQueryTradeListByUniformSymbolRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByUniformSymbolRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolRsp): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp;

                /**
                 * Encodes the specified RpcQueryTradeListByUniformSymbolRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByUniformSymbolRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByUniformSymbolRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp;

                /**
                 * Decodes a RpcQueryTradeListByUniformSymbolRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp;

                /**
                 * Verifies a RpcQueryTradeListByUniformSymbolRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByUniformSymbolRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByUniformSymbolRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp;

                /**
                 * Creates a plain object from a RpcQueryTradeListByUniformSymbolRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByUniformSymbolRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByUniformSymbolRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByUniformSymbolRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByAccountIdReq. */
            interface IRpcQueryTradeListByAccountIdReq {

                /** RpcQueryTradeListByAccountIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByAccountIdReq accountId */
                accountId?: (string|null);
            }

            /** Represents a RpcQueryTradeListByAccountIdReq. */
            class RpcQueryTradeListByAccountIdReq implements IRpcQueryTradeListByAccountIdReq {

                /**
                 * Constructs a new RpcQueryTradeListByAccountIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdReq);

                /** RpcQueryTradeListByAccountIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByAccountIdReq accountId. */
                public accountId: string;

                /**
                 * Creates a new RpcQueryTradeListByAccountIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByAccountIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdReq): xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq;

                /**
                 * Encodes the specified RpcQueryTradeListByAccountIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByAccountIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByAccountIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq;

                /**
                 * Decodes a RpcQueryTradeListByAccountIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq;

                /**
                 * Verifies a RpcQueryTradeListByAccountIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByAccountIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByAccountIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq;

                /**
                 * Creates a plain object from a RpcQueryTradeListByAccountIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByAccountIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByAccountIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByAccountIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByAccountIdRsp. */
            interface IRpcQueryTradeListByAccountIdRsp {

                /** RpcQueryTradeListByAccountIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByAccountIdRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcQueryTradeListByAccountIdRsp. */
            class RpcQueryTradeListByAccountIdRsp implements IRpcQueryTradeListByAccountIdRsp {

                /**
                 * Constructs a new RpcQueryTradeListByAccountIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdRsp);

                /** RpcQueryTradeListByAccountIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByAccountIdRsp trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcQueryTradeListByAccountIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByAccountIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdRsp): xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp;

                /**
                 * Encodes the specified RpcQueryTradeListByAccountIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByAccountIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByAccountIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp;

                /**
                 * Decodes a RpcQueryTradeListByAccountIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp;

                /**
                 * Verifies a RpcQueryTradeListByAccountIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByAccountIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByAccountIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp;

                /**
                 * Creates a plain object from a RpcQueryTradeListByAccountIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByAccountIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByAccountIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByAccountIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByOrderIdReq. */
            interface IRpcQueryTradeListByOrderIdReq {

                /** RpcQueryTradeListByOrderIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByOrderIdReq orderId */
                orderId?: (string|null);
            }

            /** Represents a RpcQueryTradeListByOrderIdReq. */
            class RpcQueryTradeListByOrderIdReq implements IRpcQueryTradeListByOrderIdReq {

                /**
                 * Constructs a new RpcQueryTradeListByOrderIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdReq);

                /** RpcQueryTradeListByOrderIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByOrderIdReq orderId. */
                public orderId: string;

                /**
                 * Creates a new RpcQueryTradeListByOrderIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByOrderIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdReq): xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq;

                /**
                 * Encodes the specified RpcQueryTradeListByOrderIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByOrderIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByOrderIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq;

                /**
                 * Decodes a RpcQueryTradeListByOrderIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq;

                /**
                 * Verifies a RpcQueryTradeListByOrderIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByOrderIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByOrderIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq;

                /**
                 * Creates a plain object from a RpcQueryTradeListByOrderIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByOrderIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByOrderIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByOrderIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByOrderIdRsp. */
            interface IRpcQueryTradeListByOrderIdRsp {

                /** RpcQueryTradeListByOrderIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByOrderIdRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcQueryTradeListByOrderIdRsp. */
            class RpcQueryTradeListByOrderIdRsp implements IRpcQueryTradeListByOrderIdRsp {

                /**
                 * Constructs a new RpcQueryTradeListByOrderIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdRsp);

                /** RpcQueryTradeListByOrderIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByOrderIdRsp trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcQueryTradeListByOrderIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByOrderIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdRsp): xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp;

                /**
                 * Encodes the specified RpcQueryTradeListByOrderIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByOrderIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByOrderIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp;

                /**
                 * Decodes a RpcQueryTradeListByOrderIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp;

                /**
                 * Verifies a RpcQueryTradeListByOrderIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByOrderIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByOrderIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp;

                /**
                 * Creates a plain object from a RpcQueryTradeListByOrderIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByOrderIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByOrderIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByOrderIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByOriginOrderIdReq. */
            interface IRpcQueryTradeListByOriginOrderIdReq {

                /** RpcQueryTradeListByOriginOrderIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByOriginOrderIdReq originOrderId */
                originOrderId?: (string|null);
            }

            /** Represents a RpcQueryTradeListByOriginOrderIdReq. */
            class RpcQueryTradeListByOriginOrderIdReq implements IRpcQueryTradeListByOriginOrderIdReq {

                /**
                 * Constructs a new RpcQueryTradeListByOriginOrderIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdReq);

                /** RpcQueryTradeListByOriginOrderIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryTradeListByOriginOrderIdReq originOrderId. */
                public originOrderId: string;

                /**
                 * Creates a new RpcQueryTradeListByOriginOrderIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByOriginOrderIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdReq): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq;

                /**
                 * Encodes the specified RpcQueryTradeListByOriginOrderIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByOriginOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByOriginOrderIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq.verify|verify} messages.
                 * @param message RpcQueryTradeListByOriginOrderIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByOriginOrderIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByOriginOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq;

                /**
                 * Decodes a RpcQueryTradeListByOriginOrderIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByOriginOrderIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq;

                /**
                 * Verifies a RpcQueryTradeListByOriginOrderIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByOriginOrderIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByOriginOrderIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq;

                /**
                 * Creates a plain object from a RpcQueryTradeListByOriginOrderIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByOriginOrderIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByOriginOrderIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryTradeListByOriginOrderIdRsp. */
            interface IRpcQueryTradeListByOriginOrderIdRsp {

                /** RpcQueryTradeListByOriginOrderIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByOriginOrderIdRsp trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcQueryTradeListByOriginOrderIdRsp. */
            class RpcQueryTradeListByOriginOrderIdRsp implements IRpcQueryTradeListByOriginOrderIdRsp {

                /**
                 * Constructs a new RpcQueryTradeListByOriginOrderIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdRsp);

                /** RpcQueryTradeListByOriginOrderIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryTradeListByOriginOrderIdRsp trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcQueryTradeListByOriginOrderIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryTradeListByOriginOrderIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdRsp): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp;

                /**
                 * Encodes the specified RpcQueryTradeListByOriginOrderIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByOriginOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryTradeListByOriginOrderIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp.verify|verify} messages.
                 * @param message RpcQueryTradeListByOriginOrderIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryTradeListByOriginOrderIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryTradeListByOriginOrderIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryTradeListByOriginOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp;

                /**
                 * Decodes a RpcQueryTradeListByOriginOrderIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryTradeListByOriginOrderIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp;

                /**
                 * Verifies a RpcQueryTradeListByOriginOrderIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryTradeListByOriginOrderIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryTradeListByOriginOrderIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp;

                /**
                 * Creates a plain object from a RpcQueryTradeListByOriginOrderIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryTradeListByOriginOrderIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryTradeListByOriginOrderIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryTradeListByOriginOrderIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetPositionListReq. */
            interface IRpcGetPositionListReq {

                /** RpcGetPositionListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetPositionListReq. */
            class RpcGetPositionListReq implements IRpcGetPositionListReq {

                /**
                 * Constructs a new RpcGetPositionListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetPositionListReq);

                /** RpcGetPositionListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetPositionListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetPositionListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetPositionListReq): xyz.redtorch.pb.RpcGetPositionListReq;

                /**
                 * Encodes the specified RpcGetPositionListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetPositionListReq.verify|verify} messages.
                 * @param message RpcGetPositionListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetPositionListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetPositionListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetPositionListReq.verify|verify} messages.
                 * @param message RpcGetPositionListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetPositionListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetPositionListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetPositionListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetPositionListReq;

                /**
                 * Decodes a RpcGetPositionListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetPositionListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetPositionListReq;

                /**
                 * Verifies a RpcGetPositionListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetPositionListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetPositionListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetPositionListReq;

                /**
                 * Creates a plain object from a RpcGetPositionListReq message. Also converts values to other types if specified.
                 * @param message RpcGetPositionListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetPositionListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetPositionListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetPositionListRsp. */
            interface IRpcGetPositionListRsp {

                /** RpcGetPositionListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetPositionListRsp position */
                position?: (xyz.redtorch.pb.IPositionField[]|null);
            }

            /** Represents a RpcGetPositionListRsp. */
            class RpcGetPositionListRsp implements IRpcGetPositionListRsp {

                /**
                 * Constructs a new RpcGetPositionListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetPositionListRsp);

                /** RpcGetPositionListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetPositionListRsp position. */
                public position: xyz.redtorch.pb.IPositionField[];

                /**
                 * Creates a new RpcGetPositionListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetPositionListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetPositionListRsp): xyz.redtorch.pb.RpcGetPositionListRsp;

                /**
                 * Encodes the specified RpcGetPositionListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetPositionListRsp.verify|verify} messages.
                 * @param message RpcGetPositionListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetPositionListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetPositionListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetPositionListRsp.verify|verify} messages.
                 * @param message RpcGetPositionListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetPositionListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetPositionListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetPositionListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetPositionListRsp;

                /**
                 * Decodes a RpcGetPositionListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetPositionListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetPositionListRsp;

                /**
                 * Verifies a RpcGetPositionListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetPositionListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetPositionListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetPositionListRsp;

                /**
                 * Creates a plain object from a RpcGetPositionListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetPositionListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetPositionListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetPositionListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionByPositionIdReq. */
            interface IRpcQueryPositionByPositionIdReq {

                /** RpcQueryPositionByPositionIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionByPositionIdReq positionId */
                positionId?: (string|null);
            }

            /** Represents a RpcQueryPositionByPositionIdReq. */
            class RpcQueryPositionByPositionIdReq implements IRpcQueryPositionByPositionIdReq {

                /**
                 * Constructs a new RpcQueryPositionByPositionIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionByPositionIdReq);

                /** RpcQueryPositionByPositionIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionByPositionIdReq positionId. */
                public positionId: string;

                /**
                 * Creates a new RpcQueryPositionByPositionIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionByPositionIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionByPositionIdReq): xyz.redtorch.pb.RpcQueryPositionByPositionIdReq;

                /**
                 * Encodes the specified RpcQueryPositionByPositionIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionByPositionIdReq.verify|verify} messages.
                 * @param message RpcQueryPositionByPositionIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionByPositionIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionByPositionIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionByPositionIdReq.verify|verify} messages.
                 * @param message RpcQueryPositionByPositionIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionByPositionIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionByPositionIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionByPositionIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionByPositionIdReq;

                /**
                 * Decodes a RpcQueryPositionByPositionIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionByPositionIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionByPositionIdReq;

                /**
                 * Verifies a RpcQueryPositionByPositionIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionByPositionIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionByPositionIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionByPositionIdReq;

                /**
                 * Creates a plain object from a RpcQueryPositionByPositionIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionByPositionIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionByPositionIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionByPositionIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionByPositionIdRsp. */
            interface IRpcQueryPositionByPositionIdRsp {

                /** RpcQueryPositionByPositionIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionByPositionIdRsp position */
                position?: (xyz.redtorch.pb.IPositionField|null);
            }

            /** Represents a RpcQueryPositionByPositionIdRsp. */
            class RpcQueryPositionByPositionIdRsp implements IRpcQueryPositionByPositionIdRsp {

                /**
                 * Constructs a new RpcQueryPositionByPositionIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionByPositionIdRsp);

                /** RpcQueryPositionByPositionIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionByPositionIdRsp position. */
                public position?: (xyz.redtorch.pb.IPositionField|null);

                /**
                 * Creates a new RpcQueryPositionByPositionIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionByPositionIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionByPositionIdRsp): xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp;

                /**
                 * Encodes the specified RpcQueryPositionByPositionIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp.verify|verify} messages.
                 * @param message RpcQueryPositionByPositionIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionByPositionIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionByPositionIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp.verify|verify} messages.
                 * @param message RpcQueryPositionByPositionIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionByPositionIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionByPositionIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionByPositionIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp;

                /**
                 * Decodes a RpcQueryPositionByPositionIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionByPositionIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp;

                /**
                 * Verifies a RpcQueryPositionByPositionIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionByPositionIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionByPositionIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp;

                /**
                 * Creates a plain object from a RpcQueryPositionByPositionIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionByPositionIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionByPositionIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionByPositionIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionListByAccountIdReq. */
            interface IRpcQueryPositionListByAccountIdReq {

                /** RpcQueryPositionListByAccountIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionListByAccountIdReq accountId */
                accountId?: (string|null);
            }

            /** Represents a RpcQueryPositionListByAccountIdReq. */
            class RpcQueryPositionListByAccountIdReq implements IRpcQueryPositionListByAccountIdReq {

                /**
                 * Constructs a new RpcQueryPositionListByAccountIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdReq);

                /** RpcQueryPositionListByAccountIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionListByAccountIdReq accountId. */
                public accountId: string;

                /**
                 * Creates a new RpcQueryPositionListByAccountIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionListByAccountIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdReq): xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq;

                /**
                 * Encodes the specified RpcQueryPositionListByAccountIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryPositionListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionListByAccountIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryPositionListByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionListByAccountIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq;

                /**
                 * Decodes a RpcQueryPositionListByAccountIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionListByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq;

                /**
                 * Verifies a RpcQueryPositionListByAccountIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionListByAccountIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionListByAccountIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq;

                /**
                 * Creates a plain object from a RpcQueryPositionListByAccountIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionListByAccountIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionListByAccountIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionListByAccountIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionListByAccountIdRsp. */
            interface IRpcQueryPositionListByAccountIdRsp {

                /** RpcQueryPositionListByAccountIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionListByAccountIdRsp position */
                position?: (xyz.redtorch.pb.IPositionField[]|null);
            }

            /** Represents a RpcQueryPositionListByAccountIdRsp. */
            class RpcQueryPositionListByAccountIdRsp implements IRpcQueryPositionListByAccountIdRsp {

                /**
                 * Constructs a new RpcQueryPositionListByAccountIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdRsp);

                /** RpcQueryPositionListByAccountIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionListByAccountIdRsp position. */
                public position: xyz.redtorch.pb.IPositionField[];

                /**
                 * Creates a new RpcQueryPositionListByAccountIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionListByAccountIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdRsp): xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp;

                /**
                 * Encodes the specified RpcQueryPositionListByAccountIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryPositionListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionListByAccountIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryPositionListByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionListByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionListByAccountIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp;

                /**
                 * Decodes a RpcQueryPositionListByAccountIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionListByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp;

                /**
                 * Verifies a RpcQueryPositionListByAccountIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionListByAccountIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionListByAccountIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp;

                /**
                 * Creates a plain object from a RpcQueryPositionListByAccountIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionListByAccountIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionListByAccountIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionListByAccountIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionListByUniformSymbolReq. */
            interface IRpcQueryPositionListByUniformSymbolReq {

                /** RpcQueryPositionListByUniformSymbolReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionListByUniformSymbolReq uniformSymbol */
                uniformSymbol?: (string|null);
            }

            /** Represents a RpcQueryPositionListByUniformSymbolReq. */
            class RpcQueryPositionListByUniformSymbolReq implements IRpcQueryPositionListByUniformSymbolReq {

                /**
                 * Constructs a new RpcQueryPositionListByUniformSymbolReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolReq);

                /** RpcQueryPositionListByUniformSymbolReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryPositionListByUniformSymbolReq uniformSymbol. */
                public uniformSymbol: string;

                /**
                 * Creates a new RpcQueryPositionListByUniformSymbolReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionListByUniformSymbolReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolReq): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq;

                /**
                 * Encodes the specified RpcQueryPositionListByUniformSymbolReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryPositionListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionListByUniformSymbolReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryPositionListByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionListByUniformSymbolReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq;

                /**
                 * Decodes a RpcQueryPositionListByUniformSymbolReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionListByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq;

                /**
                 * Verifies a RpcQueryPositionListByUniformSymbolReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionListByUniformSymbolReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionListByUniformSymbolReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq;

                /**
                 * Creates a plain object from a RpcQueryPositionListByUniformSymbolReq message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionListByUniformSymbolReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionListByUniformSymbolReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryPositionListByUniformSymbolRsp. */
            interface IRpcQueryPositionListByUniformSymbolRsp {

                /** RpcQueryPositionListByUniformSymbolRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionListByUniformSymbolRsp position */
                position?: (xyz.redtorch.pb.IPositionField[]|null);
            }

            /** Represents a RpcQueryPositionListByUniformSymbolRsp. */
            class RpcQueryPositionListByUniformSymbolRsp implements IRpcQueryPositionListByUniformSymbolRsp {

                /**
                 * Constructs a new RpcQueryPositionListByUniformSymbolRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolRsp);

                /** RpcQueryPositionListByUniformSymbolRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryPositionListByUniformSymbolRsp position. */
                public position: xyz.redtorch.pb.IPositionField[];

                /**
                 * Creates a new RpcQueryPositionListByUniformSymbolRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryPositionListByUniformSymbolRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolRsp): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp;

                /**
                 * Encodes the specified RpcQueryPositionListByUniformSymbolRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryPositionListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryPositionListByUniformSymbolRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryPositionListByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryPositionListByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryPositionListByUniformSymbolRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryPositionListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp;

                /**
                 * Decodes a RpcQueryPositionListByUniformSymbolRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryPositionListByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp;

                /**
                 * Verifies a RpcQueryPositionListByUniformSymbolRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryPositionListByUniformSymbolRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryPositionListByUniformSymbolRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp;

                /**
                 * Creates a plain object from a RpcQueryPositionListByUniformSymbolRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryPositionListByUniformSymbolRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryPositionListByUniformSymbolRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryPositionListByUniformSymbolRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetAccountListReq. */
            interface IRpcGetAccountListReq {

                /** RpcGetAccountListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetAccountListReq. */
            class RpcGetAccountListReq implements IRpcGetAccountListReq {

                /**
                 * Constructs a new RpcGetAccountListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetAccountListReq);

                /** RpcGetAccountListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetAccountListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetAccountListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetAccountListReq): xyz.redtorch.pb.RpcGetAccountListReq;

                /**
                 * Encodes the specified RpcGetAccountListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetAccountListReq.verify|verify} messages.
                 * @param message RpcGetAccountListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetAccountListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetAccountListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetAccountListReq.verify|verify} messages.
                 * @param message RpcGetAccountListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetAccountListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetAccountListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetAccountListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetAccountListReq;

                /**
                 * Decodes a RpcGetAccountListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetAccountListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetAccountListReq;

                /**
                 * Verifies a RpcGetAccountListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetAccountListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetAccountListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetAccountListReq;

                /**
                 * Creates a plain object from a RpcGetAccountListReq message. Also converts values to other types if specified.
                 * @param message RpcGetAccountListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetAccountListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetAccountListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetAccountListRsp. */
            interface IRpcGetAccountListRsp {

                /** RpcGetAccountListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetAccountListRsp account */
                account?: (xyz.redtorch.pb.IAccountField[]|null);
            }

            /** Represents a RpcGetAccountListRsp. */
            class RpcGetAccountListRsp implements IRpcGetAccountListRsp {

                /**
                 * Constructs a new RpcGetAccountListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetAccountListRsp);

                /** RpcGetAccountListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetAccountListRsp account. */
                public account: xyz.redtorch.pb.IAccountField[];

                /**
                 * Creates a new RpcGetAccountListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetAccountListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetAccountListRsp): xyz.redtorch.pb.RpcGetAccountListRsp;

                /**
                 * Encodes the specified RpcGetAccountListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetAccountListRsp.verify|verify} messages.
                 * @param message RpcGetAccountListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetAccountListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetAccountListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetAccountListRsp.verify|verify} messages.
                 * @param message RpcGetAccountListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetAccountListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetAccountListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetAccountListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetAccountListRsp;

                /**
                 * Decodes a RpcGetAccountListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetAccountListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetAccountListRsp;

                /**
                 * Verifies a RpcGetAccountListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetAccountListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetAccountListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetAccountListRsp;

                /**
                 * Creates a plain object from a RpcGetAccountListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetAccountListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetAccountListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetAccountListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryAccountByAccountIdReq. */
            interface IRpcQueryAccountByAccountIdReq {

                /** RpcQueryAccountByAccountIdReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryAccountByAccountIdReq accountId */
                accountId?: (string|null);
            }

            /** Represents a RpcQueryAccountByAccountIdReq. */
            class RpcQueryAccountByAccountIdReq implements IRpcQueryAccountByAccountIdReq {

                /**
                 * Constructs a new RpcQueryAccountByAccountIdReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryAccountByAccountIdReq);

                /** RpcQueryAccountByAccountIdReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryAccountByAccountIdReq accountId. */
                public accountId: string;

                /**
                 * Creates a new RpcQueryAccountByAccountIdReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryAccountByAccountIdReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryAccountByAccountIdReq): xyz.redtorch.pb.RpcQueryAccountByAccountIdReq;

                /**
                 * Encodes the specified RpcQueryAccountByAccountIdReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryAccountByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryAccountByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryAccountByAccountIdReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountByAccountIdReq.verify|verify} messages.
                 * @param message RpcQueryAccountByAccountIdReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryAccountByAccountIdReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryAccountByAccountIdReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryAccountByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryAccountByAccountIdReq;

                /**
                 * Decodes a RpcQueryAccountByAccountIdReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryAccountByAccountIdReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryAccountByAccountIdReq;

                /**
                 * Verifies a RpcQueryAccountByAccountIdReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryAccountByAccountIdReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryAccountByAccountIdReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryAccountByAccountIdReq;

                /**
                 * Creates a plain object from a RpcQueryAccountByAccountIdReq message. Also converts values to other types if specified.
                 * @param message RpcQueryAccountByAccountIdReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryAccountByAccountIdReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryAccountByAccountIdReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryAccountByAccountIdRsp. */
            interface IRpcQueryAccountByAccountIdRsp {

                /** RpcQueryAccountByAccountIdRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryAccountByAccountIdRsp account */
                account?: (xyz.redtorch.pb.IAccountField|null);
            }

            /** Represents a RpcQueryAccountByAccountIdRsp. */
            class RpcQueryAccountByAccountIdRsp implements IRpcQueryAccountByAccountIdRsp {

                /**
                 * Constructs a new RpcQueryAccountByAccountIdRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryAccountByAccountIdRsp);

                /** RpcQueryAccountByAccountIdRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryAccountByAccountIdRsp account. */
                public account?: (xyz.redtorch.pb.IAccountField|null);

                /**
                 * Creates a new RpcQueryAccountByAccountIdRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryAccountByAccountIdRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryAccountByAccountIdRsp): xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp;

                /**
                 * Encodes the specified RpcQueryAccountByAccountIdRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryAccountByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryAccountByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryAccountByAccountIdRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp.verify|verify} messages.
                 * @param message RpcQueryAccountByAccountIdRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryAccountByAccountIdRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryAccountByAccountIdRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryAccountByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp;

                /**
                 * Decodes a RpcQueryAccountByAccountIdRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryAccountByAccountIdRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp;

                /**
                 * Verifies a RpcQueryAccountByAccountIdRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryAccountByAccountIdRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryAccountByAccountIdRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp;

                /**
                 * Creates a plain object from a RpcQueryAccountByAccountIdRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryAccountByAccountIdRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryAccountByAccountIdRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryAccountByAccountIdRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryAccountListByAccountCodeReq. */
            interface IRpcQueryAccountListByAccountCodeReq {

                /** RpcQueryAccountListByAccountCodeReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryAccountListByAccountCodeReq accountCode */
                accountCode?: (string|null);
            }

            /** Represents a RpcQueryAccountListByAccountCodeReq. */
            class RpcQueryAccountListByAccountCodeReq implements IRpcQueryAccountListByAccountCodeReq {

                /**
                 * Constructs a new RpcQueryAccountListByAccountCodeReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeReq);

                /** RpcQueryAccountListByAccountCodeReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryAccountListByAccountCodeReq accountCode. */
                public accountCode: string;

                /**
                 * Creates a new RpcQueryAccountListByAccountCodeReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryAccountListByAccountCodeReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeReq): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq;

                /**
                 * Encodes the specified RpcQueryAccountListByAccountCodeReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq.verify|verify} messages.
                 * @param message RpcQueryAccountListByAccountCodeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryAccountListByAccountCodeReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq.verify|verify} messages.
                 * @param message RpcQueryAccountListByAccountCodeReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryAccountListByAccountCodeReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryAccountListByAccountCodeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq;

                /**
                 * Decodes a RpcQueryAccountListByAccountCodeReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryAccountListByAccountCodeReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq;

                /**
                 * Verifies a RpcQueryAccountListByAccountCodeReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryAccountListByAccountCodeReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryAccountListByAccountCodeReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq;

                /**
                 * Creates a plain object from a RpcQueryAccountListByAccountCodeReq message. Also converts values to other types if specified.
                 * @param message RpcQueryAccountListByAccountCodeReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryAccountListByAccountCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryAccountListByAccountCodeReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryAccountListByAccountCodeRsp. */
            interface IRpcQueryAccountListByAccountCodeRsp {

                /** RpcQueryAccountListByAccountCodeRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryAccountListByAccountCodeRsp account */
                account?: (xyz.redtorch.pb.IAccountField[]|null);
            }

            /** Represents a RpcQueryAccountListByAccountCodeRsp. */
            class RpcQueryAccountListByAccountCodeRsp implements IRpcQueryAccountListByAccountCodeRsp {

                /**
                 * Constructs a new RpcQueryAccountListByAccountCodeRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeRsp);

                /** RpcQueryAccountListByAccountCodeRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryAccountListByAccountCodeRsp account. */
                public account: xyz.redtorch.pb.IAccountField[];

                /**
                 * Creates a new RpcQueryAccountListByAccountCodeRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryAccountListByAccountCodeRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeRsp): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp;

                /**
                 * Encodes the specified RpcQueryAccountListByAccountCodeRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp.verify|verify} messages.
                 * @param message RpcQueryAccountListByAccountCodeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryAccountListByAccountCodeRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp.verify|verify} messages.
                 * @param message RpcQueryAccountListByAccountCodeRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryAccountListByAccountCodeRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryAccountListByAccountCodeRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryAccountListByAccountCodeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp;

                /**
                 * Decodes a RpcQueryAccountListByAccountCodeRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryAccountListByAccountCodeRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp;

                /**
                 * Verifies a RpcQueryAccountListByAccountCodeRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryAccountListByAccountCodeRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryAccountListByAccountCodeRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp;

                /**
                 * Creates a plain object from a RpcQueryAccountListByAccountCodeRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryAccountListByAccountCodeRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryAccountListByAccountCodeRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryAccountListByAccountCodeRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetContractListReq. */
            interface IRpcGetContractListReq {

                /** RpcGetContractListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetContractListReq. */
            class RpcGetContractListReq implements IRpcGetContractListReq {

                /**
                 * Constructs a new RpcGetContractListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetContractListReq);

                /** RpcGetContractListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetContractListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetContractListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetContractListReq): xyz.redtorch.pb.RpcGetContractListReq;

                /**
                 * Encodes the specified RpcGetContractListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetContractListReq.verify|verify} messages.
                 * @param message RpcGetContractListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetContractListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetContractListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetContractListReq.verify|verify} messages.
                 * @param message RpcGetContractListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetContractListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetContractListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetContractListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetContractListReq;

                /**
                 * Decodes a RpcGetContractListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetContractListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetContractListReq;

                /**
                 * Verifies a RpcGetContractListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetContractListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetContractListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetContractListReq;

                /**
                 * Creates a plain object from a RpcGetContractListReq message. Also converts values to other types if specified.
                 * @param message RpcGetContractListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetContractListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetContractListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetContractListRsp. */
            interface IRpcGetContractListRsp {

                /** RpcGetContractListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetContractListRsp contract */
                contract?: (xyz.redtorch.pb.IContractField[]|null);
            }

            /** Represents a RpcGetContractListRsp. */
            class RpcGetContractListRsp implements IRpcGetContractListRsp {

                /**
                 * Constructs a new RpcGetContractListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetContractListRsp);

                /** RpcGetContractListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetContractListRsp contract. */
                public contract: xyz.redtorch.pb.IContractField[];

                /**
                 * Creates a new RpcGetContractListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetContractListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetContractListRsp): xyz.redtorch.pb.RpcGetContractListRsp;

                /**
                 * Encodes the specified RpcGetContractListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetContractListRsp.verify|verify} messages.
                 * @param message RpcGetContractListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetContractListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetContractListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetContractListRsp.verify|verify} messages.
                 * @param message RpcGetContractListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetContractListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetContractListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetContractListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetContractListRsp;

                /**
                 * Decodes a RpcGetContractListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetContractListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetContractListRsp;

                /**
                 * Verifies a RpcGetContractListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetContractListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetContractListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetContractListRsp;

                /**
                 * Creates a plain object from a RpcGetContractListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetContractListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetContractListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetContractListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryContractByUniformSymbolReq. */
            interface IRpcQueryContractByUniformSymbolReq {

                /** RpcQueryContractByUniformSymbolReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryContractByUniformSymbolReq uniformSymbol */
                uniformSymbol?: (string|null);
            }

            /** Represents a RpcQueryContractByUniformSymbolReq. */
            class RpcQueryContractByUniformSymbolReq implements IRpcQueryContractByUniformSymbolReq {

                /**
                 * Constructs a new RpcQueryContractByUniformSymbolReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolReq);

                /** RpcQueryContractByUniformSymbolReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryContractByUniformSymbolReq uniformSymbol. */
                public uniformSymbol: string;

                /**
                 * Creates a new RpcQueryContractByUniformSymbolReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryContractByUniformSymbolReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolReq): xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq;

                /**
                 * Encodes the specified RpcQueryContractByUniformSymbolReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryContractByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryContractByUniformSymbolReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq.verify|verify} messages.
                 * @param message RpcQueryContractByUniformSymbolReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryContractByUniformSymbolReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryContractByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq;

                /**
                 * Decodes a RpcQueryContractByUniformSymbolReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryContractByUniformSymbolReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq;

                /**
                 * Verifies a RpcQueryContractByUniformSymbolReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryContractByUniformSymbolReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryContractByUniformSymbolReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq;

                /**
                 * Creates a plain object from a RpcQueryContractByUniformSymbolReq message. Also converts values to other types if specified.
                 * @param message RpcQueryContractByUniformSymbolReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryContractByUniformSymbolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryContractByUniformSymbolReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryContractByUniformSymbolRsp. */
            interface IRpcQueryContractByUniformSymbolRsp {

                /** RpcQueryContractByUniformSymbolRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryContractByUniformSymbolRsp contract */
                contract?: (xyz.redtorch.pb.IContractField|null);
            }

            /** Represents a RpcQueryContractByUniformSymbolRsp. */
            class RpcQueryContractByUniformSymbolRsp implements IRpcQueryContractByUniformSymbolRsp {

                /**
                 * Constructs a new RpcQueryContractByUniformSymbolRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolRsp);

                /** RpcQueryContractByUniformSymbolRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryContractByUniformSymbolRsp contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /**
                 * Creates a new RpcQueryContractByUniformSymbolRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryContractByUniformSymbolRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolRsp): xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp;

                /**
                 * Encodes the specified RpcQueryContractByUniformSymbolRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryContractByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryContractByUniformSymbolRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp.verify|verify} messages.
                 * @param message RpcQueryContractByUniformSymbolRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryContractByUniformSymbolRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryContractByUniformSymbolRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryContractByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp;

                /**
                 * Decodes a RpcQueryContractByUniformSymbolRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryContractByUniformSymbolRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp;

                /**
                 * Verifies a RpcQueryContractByUniformSymbolRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryContractByUniformSymbolRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryContractByUniformSymbolRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp;

                /**
                 * Creates a plain object from a RpcQueryContractByUniformSymbolRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryContractByUniformSymbolRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryContractByUniformSymbolRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryContractByUniformSymbolRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSyncSlaveNodeRuntimeDataReq. */
            interface IRpcSyncSlaveNodeRuntimeDataReq {

                /** RpcSyncSlaveNodeRuntimeDataReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSyncSlaveNodeRuntimeDataReq gateway */
                gateway?: (xyz.redtorch.pb.IGatewayField[]|null);
            }

            /** Represents a RpcSyncSlaveNodeRuntimeDataReq. */
            class RpcSyncSlaveNodeRuntimeDataReq implements IRpcSyncSlaveNodeRuntimeDataReq {

                /**
                 * Constructs a new RpcSyncSlaveNodeRuntimeDataReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataReq);

                /** RpcSyncSlaveNodeRuntimeDataReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcSyncSlaveNodeRuntimeDataReq gateway. */
                public gateway: xyz.redtorch.pb.IGatewayField[];

                /**
                 * Creates a new RpcSyncSlaveNodeRuntimeDataReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSyncSlaveNodeRuntimeDataReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataReq): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq;

                /**
                 * Encodes the specified RpcSyncSlaveNodeRuntimeDataReq message. Does not implicitly {@link xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq.verify|verify} messages.
                 * @param message RpcSyncSlaveNodeRuntimeDataReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSyncSlaveNodeRuntimeDataReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq.verify|verify} messages.
                 * @param message RpcSyncSlaveNodeRuntimeDataReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSyncSlaveNodeRuntimeDataReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSyncSlaveNodeRuntimeDataReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq;

                /**
                 * Decodes a RpcSyncSlaveNodeRuntimeDataReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSyncSlaveNodeRuntimeDataReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq;

                /**
                 * Verifies a RpcSyncSlaveNodeRuntimeDataReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSyncSlaveNodeRuntimeDataReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSyncSlaveNodeRuntimeDataReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq;

                /**
                 * Creates a plain object from a RpcSyncSlaveNodeRuntimeDataReq message. Also converts values to other types if specified.
                 * @param message RpcSyncSlaveNodeRuntimeDataReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSyncSlaveNodeRuntimeDataReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcSyncSlaveNodeRuntimeDataRsp. */
            interface IRpcSyncSlaveNodeRuntimeDataRsp {

                /** RpcSyncSlaveNodeRuntimeDataRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcSyncSlaveNodeRuntimeDataRsp gatewaySetting */
                gatewaySetting?: (xyz.redtorch.pb.IGatewaySettingField[]|null);

                /** RpcSyncSlaveNodeRuntimeDataRsp subscribedContract */
                subscribedContract?: (xyz.redtorch.pb.IContractField[]|null);
            }

            /** Represents a RpcSyncSlaveNodeRuntimeDataRsp. */
            class RpcSyncSlaveNodeRuntimeDataRsp implements IRpcSyncSlaveNodeRuntimeDataRsp {

                /**
                 * Constructs a new RpcSyncSlaveNodeRuntimeDataRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataRsp);

                /** RpcSyncSlaveNodeRuntimeDataRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcSyncSlaveNodeRuntimeDataRsp gatewaySetting. */
                public gatewaySetting: xyz.redtorch.pb.IGatewaySettingField[];

                /** RpcSyncSlaveNodeRuntimeDataRsp subscribedContract. */
                public subscribedContract: xyz.redtorch.pb.IContractField[];

                /**
                 * Creates a new RpcSyncSlaveNodeRuntimeDataRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcSyncSlaveNodeRuntimeDataRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataRsp): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp;

                /**
                 * Encodes the specified RpcSyncSlaveNodeRuntimeDataRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp.verify|verify} messages.
                 * @param message RpcSyncSlaveNodeRuntimeDataRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcSyncSlaveNodeRuntimeDataRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp.verify|verify} messages.
                 * @param message RpcSyncSlaveNodeRuntimeDataRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcSyncSlaveNodeRuntimeDataRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcSyncSlaveNodeRuntimeDataRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcSyncSlaveNodeRuntimeDataRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp;

                /**
                 * Decodes a RpcSyncSlaveNodeRuntimeDataRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcSyncSlaveNodeRuntimeDataRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp;

                /**
                 * Verifies a RpcSyncSlaveNodeRuntimeDataRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcSyncSlaveNodeRuntimeDataRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcSyncSlaveNodeRuntimeDataRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp;

                /**
                 * Creates a plain object from a RpcSyncSlaveNodeRuntimeDataRsp message. Also converts values to other types if specified.
                 * @param message RpcSyncSlaveNodeRuntimeDataRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcSyncSlaveNodeRuntimeDataRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcSyncSlaveNodeRuntimeDataRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetTickListReq. */
            interface IRpcGetTickListReq {

                /** RpcGetTickListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);
            }

            /** Represents a RpcGetTickListReq. */
            class RpcGetTickListReq implements IRpcGetTickListReq {

                /**
                 * Constructs a new RpcGetTickListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetTickListReq);

                /** RpcGetTickListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /**
                 * Creates a new RpcGetTickListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetTickListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetTickListReq): xyz.redtorch.pb.RpcGetTickListReq;

                /**
                 * Encodes the specified RpcGetTickListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcGetTickListReq.verify|verify} messages.
                 * @param message RpcGetTickListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetTickListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetTickListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetTickListReq.verify|verify} messages.
                 * @param message RpcGetTickListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetTickListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetTickListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetTickListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetTickListReq;

                /**
                 * Decodes a RpcGetTickListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetTickListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetTickListReq;

                /**
                 * Verifies a RpcGetTickListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetTickListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetTickListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetTickListReq;

                /**
                 * Creates a plain object from a RpcGetTickListReq message. Also converts values to other types if specified.
                 * @param message RpcGetTickListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetTickListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetTickListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcGetTickListRsp. */
            interface IRpcGetTickListRsp {

                /** RpcGetTickListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetTickListRsp tick */
                tick?: (xyz.redtorch.pb.ITickField[]|null);
            }

            /** Represents a RpcGetTickListRsp. */
            class RpcGetTickListRsp implements IRpcGetTickListRsp {

                /**
                 * Constructs a new RpcGetTickListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcGetTickListRsp);

                /** RpcGetTickListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcGetTickListRsp tick. */
                public tick: xyz.redtorch.pb.ITickField[];

                /**
                 * Creates a new RpcGetTickListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcGetTickListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcGetTickListRsp): xyz.redtorch.pb.RpcGetTickListRsp;

                /**
                 * Encodes the specified RpcGetTickListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcGetTickListRsp.verify|verify} messages.
                 * @param message RpcGetTickListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcGetTickListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcGetTickListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcGetTickListRsp.verify|verify} messages.
                 * @param message RpcGetTickListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcGetTickListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcGetTickListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcGetTickListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcGetTickListRsp;

                /**
                 * Decodes a RpcGetTickListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcGetTickListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcGetTickListRsp;

                /**
                 * Verifies a RpcGetTickListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcGetTickListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcGetTickListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcGetTickListRsp;

                /**
                 * Creates a plain object from a RpcGetTickListRsp message. Also converts values to other types if specified.
                 * @param message RpcGetTickListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcGetTickListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcGetTickListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryDBBarListReq. */
            interface IRpcQueryDBBarListReq {

                /** RpcQueryDBBarListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryDBBarListReq startTimestamp */
                startTimestamp?: (number|Long|null);

                /** RpcQueryDBBarListReq endTimestamp */
                endTimestamp?: (number|Long|null);

                /** RpcQueryDBBarListReq uniformSymbol */
                uniformSymbol?: (string|null);

                /** RpcQueryDBBarListReq barPeriod */
                barPeriod?: (xyz.redtorch.pb.BarPeriodEnum|null);

                /** RpcQueryDBBarListReq marketDataDBType */
                marketDataDBType?: (xyz.redtorch.pb.MarketDataDBTypeEnum|null);
            }

            /** Represents a RpcQueryDBBarListReq. */
            class RpcQueryDBBarListReq implements IRpcQueryDBBarListReq {

                /**
                 * Constructs a new RpcQueryDBBarListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryDBBarListReq);

                /** RpcQueryDBBarListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryDBBarListReq startTimestamp. */
                public startTimestamp: (number|Long);

                /** RpcQueryDBBarListReq endTimestamp. */
                public endTimestamp: (number|Long);

                /** RpcQueryDBBarListReq uniformSymbol. */
                public uniformSymbol: string;

                /** RpcQueryDBBarListReq barPeriod. */
                public barPeriod: xyz.redtorch.pb.BarPeriodEnum;

                /** RpcQueryDBBarListReq marketDataDBType. */
                public marketDataDBType: xyz.redtorch.pb.MarketDataDBTypeEnum;

                /**
                 * Creates a new RpcQueryDBBarListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryDBBarListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryDBBarListReq): xyz.redtorch.pb.RpcQueryDBBarListReq;

                /**
                 * Encodes the specified RpcQueryDBBarListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBBarListReq.verify|verify} messages.
                 * @param message RpcQueryDBBarListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryDBBarListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryDBBarListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBBarListReq.verify|verify} messages.
                 * @param message RpcQueryDBBarListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryDBBarListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryDBBarListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryDBBarListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryDBBarListReq;

                /**
                 * Decodes a RpcQueryDBBarListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryDBBarListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryDBBarListReq;

                /**
                 * Verifies a RpcQueryDBBarListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryDBBarListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryDBBarListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryDBBarListReq;

                /**
                 * Creates a plain object from a RpcQueryDBBarListReq message. Also converts values to other types if specified.
                 * @param message RpcQueryDBBarListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryDBBarListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryDBBarListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryDBBarListRsp. */
            interface IRpcQueryDBBarListRsp {

                /** RpcQueryDBBarListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryDBBarListRsp bar */
                bar?: (xyz.redtorch.pb.IBarField[]|null);
            }

            /** Represents a RpcQueryDBBarListRsp. */
            class RpcQueryDBBarListRsp implements IRpcQueryDBBarListRsp {

                /**
                 * Constructs a new RpcQueryDBBarListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryDBBarListRsp);

                /** RpcQueryDBBarListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryDBBarListRsp bar. */
                public bar: xyz.redtorch.pb.IBarField[];

                /**
                 * Creates a new RpcQueryDBBarListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryDBBarListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryDBBarListRsp): xyz.redtorch.pb.RpcQueryDBBarListRsp;

                /**
                 * Encodes the specified RpcQueryDBBarListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBBarListRsp.verify|verify} messages.
                 * @param message RpcQueryDBBarListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryDBBarListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryDBBarListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBBarListRsp.verify|verify} messages.
                 * @param message RpcQueryDBBarListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryDBBarListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryDBBarListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryDBBarListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryDBBarListRsp;

                /**
                 * Decodes a RpcQueryDBBarListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryDBBarListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryDBBarListRsp;

                /**
                 * Verifies a RpcQueryDBBarListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryDBBarListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryDBBarListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryDBBarListRsp;

                /**
                 * Creates a plain object from a RpcQueryDBBarListRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryDBBarListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryDBBarListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryDBBarListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryDBTickListReq. */
            interface IRpcQueryDBTickListReq {

                /** RpcQueryDBTickListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryDBTickListReq startTimestamp */
                startTimestamp?: (number|Long|null);

                /** RpcQueryDBTickListReq endTimestamp */
                endTimestamp?: (number|Long|null);

                /** RpcQueryDBTickListReq uniformSymbol */
                uniformSymbol?: (string|null);

                /** RpcQueryDBTickListReq marketDataDBType */
                marketDataDBType?: (xyz.redtorch.pb.MarketDataDBTypeEnum|null);
            }

            /** Represents a RpcQueryDBTickListReq. */
            class RpcQueryDBTickListReq implements IRpcQueryDBTickListReq {

                /**
                 * Constructs a new RpcQueryDBTickListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryDBTickListReq);

                /** RpcQueryDBTickListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryDBTickListReq startTimestamp. */
                public startTimestamp: (number|Long);

                /** RpcQueryDBTickListReq endTimestamp. */
                public endTimestamp: (number|Long);

                /** RpcQueryDBTickListReq uniformSymbol. */
                public uniformSymbol: string;

                /** RpcQueryDBTickListReq marketDataDBType. */
                public marketDataDBType: xyz.redtorch.pb.MarketDataDBTypeEnum;

                /**
                 * Creates a new RpcQueryDBTickListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryDBTickListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryDBTickListReq): xyz.redtorch.pb.RpcQueryDBTickListReq;

                /**
                 * Encodes the specified RpcQueryDBTickListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBTickListReq.verify|verify} messages.
                 * @param message RpcQueryDBTickListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryDBTickListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryDBTickListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBTickListReq.verify|verify} messages.
                 * @param message RpcQueryDBTickListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryDBTickListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryDBTickListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryDBTickListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryDBTickListReq;

                /**
                 * Decodes a RpcQueryDBTickListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryDBTickListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryDBTickListReq;

                /**
                 * Verifies a RpcQueryDBTickListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryDBTickListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryDBTickListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryDBTickListReq;

                /**
                 * Creates a plain object from a RpcQueryDBTickListReq message. Also converts values to other types if specified.
                 * @param message RpcQueryDBTickListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryDBTickListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryDBTickListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryDBTickListRsp. */
            interface IRpcQueryDBTickListRsp {

                /** RpcQueryDBTickListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryDBTickListRsp tick */
                tick?: (xyz.redtorch.pb.ITickField[]|null);
            }

            /** Represents a RpcQueryDBTickListRsp. */
            class RpcQueryDBTickListRsp implements IRpcQueryDBTickListRsp {

                /**
                 * Constructs a new RpcQueryDBTickListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryDBTickListRsp);

                /** RpcQueryDBTickListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryDBTickListRsp tick. */
                public tick: xyz.redtorch.pb.ITickField[];

                /**
                 * Creates a new RpcQueryDBTickListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryDBTickListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryDBTickListRsp): xyz.redtorch.pb.RpcQueryDBTickListRsp;

                /**
                 * Encodes the specified RpcQueryDBTickListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBTickListRsp.verify|verify} messages.
                 * @param message RpcQueryDBTickListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryDBTickListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryDBTickListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryDBTickListRsp.verify|verify} messages.
                 * @param message RpcQueryDBTickListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryDBTickListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryDBTickListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryDBTickListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryDBTickListRsp;

                /**
                 * Decodes a RpcQueryDBTickListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryDBTickListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryDBTickListRsp;

                /**
                 * Verifies a RpcQueryDBTickListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryDBTickListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryDBTickListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryDBTickListRsp;

                /**
                 * Creates a plain object from a RpcQueryDBTickListRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryDBTickListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryDBTickListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryDBTickListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryVolumeBarListReq. */
            interface IRpcQueryVolumeBarListReq {

                /** RpcQueryVolumeBarListReq commonReq */
                commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryVolumeBarListReq startTimestamp */
                startTimestamp?: (number|Long|null);

                /** RpcQueryVolumeBarListReq endTimestamp */
                endTimestamp?: (number|Long|null);

                /** RpcQueryVolumeBarListReq uniformSymbol */
                uniformSymbol?: (string|null);

                /** RpcQueryVolumeBarListReq volume */
                volume?: (number|null);
            }

            /** Represents a RpcQueryVolumeBarListReq. */
            class RpcQueryVolumeBarListReq implements IRpcQueryVolumeBarListReq {

                /**
                 * Constructs a new RpcQueryVolumeBarListReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryVolumeBarListReq);

                /** RpcQueryVolumeBarListReq commonReq. */
                public commonReq?: (xyz.redtorch.pb.ICommonReqField|null);

                /** RpcQueryVolumeBarListReq startTimestamp. */
                public startTimestamp: (number|Long);

                /** RpcQueryVolumeBarListReq endTimestamp. */
                public endTimestamp: (number|Long);

                /** RpcQueryVolumeBarListReq uniformSymbol. */
                public uniformSymbol: string;

                /** RpcQueryVolumeBarListReq volume. */
                public volume: number;

                /**
                 * Creates a new RpcQueryVolumeBarListReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryVolumeBarListReq instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryVolumeBarListReq): xyz.redtorch.pb.RpcQueryVolumeBarListReq;

                /**
                 * Encodes the specified RpcQueryVolumeBarListReq message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryVolumeBarListReq.verify|verify} messages.
                 * @param message RpcQueryVolumeBarListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryVolumeBarListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryVolumeBarListReq message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryVolumeBarListReq.verify|verify} messages.
                 * @param message RpcQueryVolumeBarListReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryVolumeBarListReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryVolumeBarListReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryVolumeBarListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryVolumeBarListReq;

                /**
                 * Decodes a RpcQueryVolumeBarListReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryVolumeBarListReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryVolumeBarListReq;

                /**
                 * Verifies a RpcQueryVolumeBarListReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryVolumeBarListReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryVolumeBarListReq
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryVolumeBarListReq;

                /**
                 * Creates a plain object from a RpcQueryVolumeBarListReq message. Also converts values to other types if specified.
                 * @param message RpcQueryVolumeBarListReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryVolumeBarListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryVolumeBarListReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcQueryVolumeBarListRsp. */
            interface IRpcQueryVolumeBarListRsp {

                /** RpcQueryVolumeBarListRsp commonRsp */
                commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryVolumeBarListRsp bar */
                bar?: (xyz.redtorch.pb.IBarField[]|null);
            }

            /** Represents a RpcQueryVolumeBarListRsp. */
            class RpcQueryVolumeBarListRsp implements IRpcQueryVolumeBarListRsp {

                /**
                 * Constructs a new RpcQueryVolumeBarListRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcQueryVolumeBarListRsp);

                /** RpcQueryVolumeBarListRsp commonRsp. */
                public commonRsp?: (xyz.redtorch.pb.ICommonRspField|null);

                /** RpcQueryVolumeBarListRsp bar. */
                public bar: xyz.redtorch.pb.IBarField[];

                /**
                 * Creates a new RpcQueryVolumeBarListRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcQueryVolumeBarListRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcQueryVolumeBarListRsp): xyz.redtorch.pb.RpcQueryVolumeBarListRsp;

                /**
                 * Encodes the specified RpcQueryVolumeBarListRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcQueryVolumeBarListRsp.verify|verify} messages.
                 * @param message RpcQueryVolumeBarListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcQueryVolumeBarListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcQueryVolumeBarListRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcQueryVolumeBarListRsp.verify|verify} messages.
                 * @param message RpcQueryVolumeBarListRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcQueryVolumeBarListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcQueryVolumeBarListRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcQueryVolumeBarListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcQueryVolumeBarListRsp;

                /**
                 * Decodes a RpcQueryVolumeBarListRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcQueryVolumeBarListRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcQueryVolumeBarListRsp;

                /**
                 * Verifies a RpcQueryVolumeBarListRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcQueryVolumeBarListRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcQueryVolumeBarListRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcQueryVolumeBarListRsp;

                /**
                 * Creates a plain object from a RpcQueryVolumeBarListRsp message. Also converts values to other types if specified.
                 * @param message RpcQueryVolumeBarListRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcQueryVolumeBarListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcQueryVolumeBarListRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcExceptionRsp. */
            interface IRpcExceptionRsp {

                /** RpcExceptionRsp originalRpcId */
                originalRpcId?: (number|null);

                /** RpcExceptionRsp originalTransactionId */
                originalTransactionId?: (string|null);

                /** RpcExceptionRsp originalTimestamp */
                originalTimestamp?: (number|Long|null);

                /** RpcExceptionRsp info */
                info?: (string|null);
            }

            /** Represents a RpcExceptionRsp. */
            class RpcExceptionRsp implements IRpcExceptionRsp {

                /**
                 * Constructs a new RpcExceptionRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcExceptionRsp);

                /** RpcExceptionRsp originalRpcId. */
                public originalRpcId: number;

                /** RpcExceptionRsp originalTransactionId. */
                public originalTransactionId: string;

                /** RpcExceptionRsp originalTimestamp. */
                public originalTimestamp: (number|Long);

                /** RpcExceptionRsp info. */
                public info: string;

                /**
                 * Creates a new RpcExceptionRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcExceptionRsp instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcExceptionRsp): xyz.redtorch.pb.RpcExceptionRsp;

                /**
                 * Encodes the specified RpcExceptionRsp message. Does not implicitly {@link xyz.redtorch.pb.RpcExceptionRsp.verify|verify} messages.
                 * @param message RpcExceptionRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcExceptionRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcExceptionRsp message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcExceptionRsp.verify|verify} messages.
                 * @param message RpcExceptionRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcExceptionRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcExceptionRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcExceptionRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcExceptionRsp;

                /**
                 * Decodes a RpcExceptionRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcExceptionRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcExceptionRsp;

                /**
                 * Verifies a RpcExceptionRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcExceptionRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcExceptionRsp
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcExceptionRsp;

                /**
                 * Creates a plain object from a RpcExceptionRsp message. Also converts values to other types if specified.
                 * @param message RpcExceptionRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcExceptionRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcExceptionRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcOrderRtn. */
            interface IRpcOrderRtn {

                /** RpcOrderRtn order */
                order?: (xyz.redtorch.pb.IOrderField|null);
            }

            /** Represents a RpcOrderRtn. */
            class RpcOrderRtn implements IRpcOrderRtn {

                /**
                 * Constructs a new RpcOrderRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcOrderRtn);

                /** RpcOrderRtn order. */
                public order?: (xyz.redtorch.pb.IOrderField|null);

                /**
                 * Creates a new RpcOrderRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcOrderRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcOrderRtn): xyz.redtorch.pb.RpcOrderRtn;

                /**
                 * Encodes the specified RpcOrderRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcOrderRtn.verify|verify} messages.
                 * @param message RpcOrderRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcOrderRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcOrderRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcOrderRtn.verify|verify} messages.
                 * @param message RpcOrderRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcOrderRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcOrderRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcOrderRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcOrderRtn;

                /**
                 * Decodes a RpcOrderRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcOrderRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcOrderRtn;

                /**
                 * Verifies a RpcOrderRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcOrderRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcOrderRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcOrderRtn;

                /**
                 * Creates a plain object from a RpcOrderRtn message. Also converts values to other types if specified.
                 * @param message RpcOrderRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcOrderRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcOrderRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcTradeRtn. */
            interface IRpcTradeRtn {

                /** RpcTradeRtn trade */
                trade?: (xyz.redtorch.pb.ITradeField|null);
            }

            /** Represents a RpcTradeRtn. */
            class RpcTradeRtn implements IRpcTradeRtn {

                /**
                 * Constructs a new RpcTradeRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcTradeRtn);

                /** RpcTradeRtn trade. */
                public trade?: (xyz.redtorch.pb.ITradeField|null);

                /**
                 * Creates a new RpcTradeRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcTradeRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcTradeRtn): xyz.redtorch.pb.RpcTradeRtn;

                /**
                 * Encodes the specified RpcTradeRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcTradeRtn.verify|verify} messages.
                 * @param message RpcTradeRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcTradeRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcTradeRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcTradeRtn.verify|verify} messages.
                 * @param message RpcTradeRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcTradeRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcTradeRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcTradeRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcTradeRtn;

                /**
                 * Decodes a RpcTradeRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcTradeRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcTradeRtn;

                /**
                 * Verifies a RpcTradeRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcTradeRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcTradeRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcTradeRtn;

                /**
                 * Creates a plain object from a RpcTradeRtn message. Also converts values to other types if specified.
                 * @param message RpcTradeRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcTradeRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcTradeRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcContractRtn. */
            interface IRpcContractRtn {

                /** RpcContractRtn contract */
                contract?: (xyz.redtorch.pb.IContractField|null);
            }

            /** Represents a RpcContractRtn. */
            class RpcContractRtn implements IRpcContractRtn {

                /**
                 * Constructs a new RpcContractRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcContractRtn);

                /** RpcContractRtn contract. */
                public contract?: (xyz.redtorch.pb.IContractField|null);

                /**
                 * Creates a new RpcContractRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcContractRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcContractRtn): xyz.redtorch.pb.RpcContractRtn;

                /**
                 * Encodes the specified RpcContractRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcContractRtn.verify|verify} messages.
                 * @param message RpcContractRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcContractRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcContractRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcContractRtn.verify|verify} messages.
                 * @param message RpcContractRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcContractRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcContractRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcContractRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcContractRtn;

                /**
                 * Decodes a RpcContractRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcContractRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcContractRtn;

                /**
                 * Verifies a RpcContractRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcContractRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcContractRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcContractRtn;

                /**
                 * Creates a plain object from a RpcContractRtn message. Also converts values to other types if specified.
                 * @param message RpcContractRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcContractRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcContractRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcPositionRtn. */
            interface IRpcPositionRtn {

                /** RpcPositionRtn position */
                position?: (xyz.redtorch.pb.IPositionField|null);
            }

            /** Represents a RpcPositionRtn. */
            class RpcPositionRtn implements IRpcPositionRtn {

                /**
                 * Constructs a new RpcPositionRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcPositionRtn);

                /** RpcPositionRtn position. */
                public position?: (xyz.redtorch.pb.IPositionField|null);

                /**
                 * Creates a new RpcPositionRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcPositionRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcPositionRtn): xyz.redtorch.pb.RpcPositionRtn;

                /**
                 * Encodes the specified RpcPositionRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcPositionRtn.verify|verify} messages.
                 * @param message RpcPositionRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcPositionRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcPositionRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcPositionRtn.verify|verify} messages.
                 * @param message RpcPositionRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcPositionRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcPositionRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcPositionRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcPositionRtn;

                /**
                 * Decodes a RpcPositionRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcPositionRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcPositionRtn;

                /**
                 * Verifies a RpcPositionRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcPositionRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcPositionRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcPositionRtn;

                /**
                 * Creates a plain object from a RpcPositionRtn message. Also converts values to other types if specified.
                 * @param message RpcPositionRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcPositionRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcPositionRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcAccountRtn. */
            interface IRpcAccountRtn {

                /** RpcAccountRtn account */
                account?: (xyz.redtorch.pb.IAccountField|null);
            }

            /** Represents a RpcAccountRtn. */
            class RpcAccountRtn implements IRpcAccountRtn {

                /**
                 * Constructs a new RpcAccountRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcAccountRtn);

                /** RpcAccountRtn account. */
                public account?: (xyz.redtorch.pb.IAccountField|null);

                /**
                 * Creates a new RpcAccountRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcAccountRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcAccountRtn): xyz.redtorch.pb.RpcAccountRtn;

                /**
                 * Encodes the specified RpcAccountRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcAccountRtn.verify|verify} messages.
                 * @param message RpcAccountRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcAccountRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcAccountRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcAccountRtn.verify|verify} messages.
                 * @param message RpcAccountRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcAccountRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcAccountRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcAccountRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcAccountRtn;

                /**
                 * Decodes a RpcAccountRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcAccountRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcAccountRtn;

                /**
                 * Verifies a RpcAccountRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcAccountRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcAccountRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcAccountRtn;

                /**
                 * Creates a plain object from a RpcAccountRtn message. Also converts values to other types if specified.
                 * @param message RpcAccountRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcAccountRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcAccountRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcTickRtn. */
            interface IRpcTickRtn {

                /** RpcTickRtn tick */
                tick?: (xyz.redtorch.pb.ITickField|null);
            }

            /** Represents a RpcTickRtn. */
            class RpcTickRtn implements IRpcTickRtn {

                /**
                 * Constructs a new RpcTickRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcTickRtn);

                /** RpcTickRtn tick. */
                public tick?: (xyz.redtorch.pb.ITickField|null);

                /**
                 * Creates a new RpcTickRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcTickRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcTickRtn): xyz.redtorch.pb.RpcTickRtn;

                /**
                 * Encodes the specified RpcTickRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcTickRtn.verify|verify} messages.
                 * @param message RpcTickRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcTickRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcTickRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcTickRtn.verify|verify} messages.
                 * @param message RpcTickRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcTickRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcTickRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcTickRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcTickRtn;

                /**
                 * Decodes a RpcTickRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcTickRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcTickRtn;

                /**
                 * Verifies a RpcTickRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcTickRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcTickRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcTickRtn;

                /**
                 * Creates a plain object from a RpcTickRtn message. Also converts values to other types if specified.
                 * @param message RpcTickRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcTickRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcTickRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcOrderListRtn. */
            interface IRpcOrderListRtn {

                /** RpcOrderListRtn order */
                order?: (xyz.redtorch.pb.IOrderField[]|null);
            }

            /** Represents a RpcOrderListRtn. */
            class RpcOrderListRtn implements IRpcOrderListRtn {

                /**
                 * Constructs a new RpcOrderListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcOrderListRtn);

                /** RpcOrderListRtn order. */
                public order: xyz.redtorch.pb.IOrderField[];

                /**
                 * Creates a new RpcOrderListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcOrderListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcOrderListRtn): xyz.redtorch.pb.RpcOrderListRtn;

                /**
                 * Encodes the specified RpcOrderListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcOrderListRtn.verify|verify} messages.
                 * @param message RpcOrderListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcOrderListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcOrderListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcOrderListRtn.verify|verify} messages.
                 * @param message RpcOrderListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcOrderListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcOrderListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcOrderListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcOrderListRtn;

                /**
                 * Decodes a RpcOrderListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcOrderListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcOrderListRtn;

                /**
                 * Verifies a RpcOrderListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcOrderListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcOrderListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcOrderListRtn;

                /**
                 * Creates a plain object from a RpcOrderListRtn message. Also converts values to other types if specified.
                 * @param message RpcOrderListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcOrderListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcOrderListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcTradeListRtn. */
            interface IRpcTradeListRtn {

                /** RpcTradeListRtn trade */
                trade?: (xyz.redtorch.pb.ITradeField[]|null);
            }

            /** Represents a RpcTradeListRtn. */
            class RpcTradeListRtn implements IRpcTradeListRtn {

                /**
                 * Constructs a new RpcTradeListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcTradeListRtn);

                /** RpcTradeListRtn trade. */
                public trade: xyz.redtorch.pb.ITradeField[];

                /**
                 * Creates a new RpcTradeListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcTradeListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcTradeListRtn): xyz.redtorch.pb.RpcTradeListRtn;

                /**
                 * Encodes the specified RpcTradeListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcTradeListRtn.verify|verify} messages.
                 * @param message RpcTradeListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcTradeListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcTradeListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcTradeListRtn.verify|verify} messages.
                 * @param message RpcTradeListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcTradeListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcTradeListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcTradeListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcTradeListRtn;

                /**
                 * Decodes a RpcTradeListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcTradeListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcTradeListRtn;

                /**
                 * Verifies a RpcTradeListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcTradeListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcTradeListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcTradeListRtn;

                /**
                 * Creates a plain object from a RpcTradeListRtn message. Also converts values to other types if specified.
                 * @param message RpcTradeListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcTradeListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcTradeListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcContractListRtn. */
            interface IRpcContractListRtn {

                /** RpcContractListRtn contract */
                contract?: (xyz.redtorch.pb.IContractField[]|null);
            }

            /** Represents a RpcContractListRtn. */
            class RpcContractListRtn implements IRpcContractListRtn {

                /**
                 * Constructs a new RpcContractListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcContractListRtn);

                /** RpcContractListRtn contract. */
                public contract: xyz.redtorch.pb.IContractField[];

                /**
                 * Creates a new RpcContractListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcContractListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcContractListRtn): xyz.redtorch.pb.RpcContractListRtn;

                /**
                 * Encodes the specified RpcContractListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcContractListRtn.verify|verify} messages.
                 * @param message RpcContractListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcContractListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcContractListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcContractListRtn.verify|verify} messages.
                 * @param message RpcContractListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcContractListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcContractListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcContractListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcContractListRtn;

                /**
                 * Decodes a RpcContractListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcContractListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcContractListRtn;

                /**
                 * Verifies a RpcContractListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcContractListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcContractListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcContractListRtn;

                /**
                 * Creates a plain object from a RpcContractListRtn message. Also converts values to other types if specified.
                 * @param message RpcContractListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcContractListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcContractListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcPositionListRtn. */
            interface IRpcPositionListRtn {

                /** RpcPositionListRtn position */
                position?: (xyz.redtorch.pb.IPositionField[]|null);
            }

            /** Represents a RpcPositionListRtn. */
            class RpcPositionListRtn implements IRpcPositionListRtn {

                /**
                 * Constructs a new RpcPositionListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcPositionListRtn);

                /** RpcPositionListRtn position. */
                public position: xyz.redtorch.pb.IPositionField[];

                /**
                 * Creates a new RpcPositionListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcPositionListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcPositionListRtn): xyz.redtorch.pb.RpcPositionListRtn;

                /**
                 * Encodes the specified RpcPositionListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcPositionListRtn.verify|verify} messages.
                 * @param message RpcPositionListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcPositionListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcPositionListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcPositionListRtn.verify|verify} messages.
                 * @param message RpcPositionListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcPositionListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcPositionListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcPositionListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcPositionListRtn;

                /**
                 * Decodes a RpcPositionListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcPositionListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcPositionListRtn;

                /**
                 * Verifies a RpcPositionListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcPositionListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcPositionListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcPositionListRtn;

                /**
                 * Creates a plain object from a RpcPositionListRtn message. Also converts values to other types if specified.
                 * @param message RpcPositionListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcPositionListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcPositionListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcAccountListRtn. */
            interface IRpcAccountListRtn {

                /** RpcAccountListRtn account */
                account?: (xyz.redtorch.pb.IAccountField[]|null);
            }

            /** Represents a RpcAccountListRtn. */
            class RpcAccountListRtn implements IRpcAccountListRtn {

                /**
                 * Constructs a new RpcAccountListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcAccountListRtn);

                /** RpcAccountListRtn account. */
                public account: xyz.redtorch.pb.IAccountField[];

                /**
                 * Creates a new RpcAccountListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcAccountListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcAccountListRtn): xyz.redtorch.pb.RpcAccountListRtn;

                /**
                 * Encodes the specified RpcAccountListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcAccountListRtn.verify|verify} messages.
                 * @param message RpcAccountListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcAccountListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcAccountListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcAccountListRtn.verify|verify} messages.
                 * @param message RpcAccountListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcAccountListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcAccountListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcAccountListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcAccountListRtn;

                /**
                 * Decodes a RpcAccountListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcAccountListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcAccountListRtn;

                /**
                 * Verifies a RpcAccountListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcAccountListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcAccountListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcAccountListRtn;

                /**
                 * Creates a plain object from a RpcAccountListRtn message. Also converts values to other types if specified.
                 * @param message RpcAccountListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcAccountListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcAccountListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcTickListRtn. */
            interface IRpcTickListRtn {

                /** RpcTickListRtn tick */
                tick?: (xyz.redtorch.pb.ITickField[]|null);
            }

            /** Represents a RpcTickListRtn. */
            class RpcTickListRtn implements IRpcTickListRtn {

                /**
                 * Constructs a new RpcTickListRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcTickListRtn);

                /** RpcTickListRtn tick. */
                public tick: xyz.redtorch.pb.ITickField[];

                /**
                 * Creates a new RpcTickListRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcTickListRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcTickListRtn): xyz.redtorch.pb.RpcTickListRtn;

                /**
                 * Encodes the specified RpcTickListRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcTickListRtn.verify|verify} messages.
                 * @param message RpcTickListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcTickListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcTickListRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcTickListRtn.verify|verify} messages.
                 * @param message RpcTickListRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcTickListRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcTickListRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcTickListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcTickListRtn;

                /**
                 * Decodes a RpcTickListRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcTickListRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcTickListRtn;

                /**
                 * Verifies a RpcTickListRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcTickListRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcTickListRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcTickListRtn;

                /**
                 * Creates a plain object from a RpcTickListRtn message. Also converts values to other types if specified.
                 * @param message RpcTickListRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcTickListRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcTickListRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RpcNoticeRtn. */
            interface IRpcNoticeRtn {

                /** RpcNoticeRtn notice */
                notice?: (xyz.redtorch.pb.INoticeField|null);
            }

            /** Represents a RpcNoticeRtn. */
            class RpcNoticeRtn implements IRpcNoticeRtn {

                /**
                 * Constructs a new RpcNoticeRtn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IRpcNoticeRtn);

                /** RpcNoticeRtn notice. */
                public notice?: (xyz.redtorch.pb.INoticeField|null);

                /**
                 * Creates a new RpcNoticeRtn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RpcNoticeRtn instance
                 */
                public static create(properties?: xyz.redtorch.pb.IRpcNoticeRtn): xyz.redtorch.pb.RpcNoticeRtn;

                /**
                 * Encodes the specified RpcNoticeRtn message. Does not implicitly {@link xyz.redtorch.pb.RpcNoticeRtn.verify|verify} messages.
                 * @param message RpcNoticeRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IRpcNoticeRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RpcNoticeRtn message, length delimited. Does not implicitly {@link xyz.redtorch.pb.RpcNoticeRtn.verify|verify} messages.
                 * @param message RpcNoticeRtn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IRpcNoticeRtn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RpcNoticeRtn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RpcNoticeRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.RpcNoticeRtn;

                /**
                 * Decodes a RpcNoticeRtn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RpcNoticeRtn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.RpcNoticeRtn;

                /**
                 * Verifies a RpcNoticeRtn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RpcNoticeRtn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RpcNoticeRtn
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.RpcNoticeRtn;

                /**
                 * Creates a plain object from a RpcNoticeRtn message. Also converts values to other types if specified.
                 * @param message RpcNoticeRtn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.RpcNoticeRtn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RpcNoticeRtn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** RpcId enum. */
            enum RpcId {
                UNKNOWN_RPC_ID = 0,
                SUBSCRIBE_REQ = 1,
                SUBSCRIBE_RSP = 2,
                UNSUBSCRIBE_REQ = 3,
                UNSUBSCRIBE_RSP = 4,
                SUBMIT_ORDER_REQ = 5,
                SUBMIT_ORDER_RSP = 6,
                CANCEL_ORDER_REQ = 7,
                CANCEL_ORDER_RSP = 8,
                SEARCH_CONTRACT_REQ = 9,
                SEARCH_CONTRACT_RSP = 10,
                GET_ORDER_LIST_REQ = 11,
                GET_ORDER_LIST_RSP = 12,
                GET_WORKING_ORDER_LIST_REQ = 13,
                GET_WORKING_ORDER_LIST_RSP = 14,
                QUERY_ORDER_BY_ORDER_ID_REQ = 15,
                QUERY_ORDER_BY_ORDER_ID_RSP = 16,
                QUERY_ORDER_BY_ORIGIN_ORDER_ID_REQ = 17,
                QUERY_ORDER_BY_ORIGIN_ORDER_ID_RSP = 18,
                QUERY_ORDER_LIST_BY_ACCOUNT_ID_REQ = 19,
                QUERY_ORDER_LIST_BY_ACCOUNT_ID_RSP = 20,
                QUERY_ORDER_LIST_BY_UNIFORM_SYMBOL_REQ = 21,
                QUERY_ORDER_LIST_BY_UNIFORM_SYMBOL_RSP = 22,
                GET_TRADE_LIST_REQ = 23,
                GET_TRADE_LIST_RSP = 24,
                QUERY_TRADE_BY_TRADE_ID_REQ = 25,
                QUERY_TRADE_BY_TRADE_ID_RSP = 26,
                QUERY_TRADE_LIST_BY_UNIFORM_SYMBOL_REQ = 27,
                QUERY_TRADE_LIST_BY_UNIFORM_SYMBOL_RSP = 28,
                QUERY_TRADE_LIST_BY_ACCOUNT_ID_REQ = 29,
                QUERY_TRADE_LIST_BY_ACCOUNT_ID_RSP = 30,
                QUERY_TRADE_LIST_BY_ORDER_ID_REQ = 31,
                QUERY_TRADE_LIST_BY_ORDER_ID_RSP = 32,
                QUERY_TRADE_LIST_BY_ORIGIN_ORDER_ID_REQ = 33,
                QUERY_TRADE_LIST_BY_ORIGIN_ORDER_ID_RSP = 34,
                GET_POSITION_LIST_REQ = 35,
                GET_POSITION_LIST_RSP = 36,
                QUERY_POSITION_BY_POSITION_ID_REQ = 37,
                QUERY_POSITION_BY_POSITION_ID_RSP = 38,
                QUERY_POSITION_LIST_BY_ACCOUNT_ID_REQ = 39,
                QUERY_POSITION_LIST_BY_ACCOUNT_ID_RSP = 40,
                QUERY_POSITION_LIST_BY_UNIFORM_SYMBOL_REQ = 41,
                QUERY_POSITION_LIST_BY_UNIFORM_SYMBOL_RSP = 42,
                GET_ACCOUNT_LIST_REQ = 43,
                GET_ACCOUNT_LIST_RSP = 44,
                QUERY_ACCOUNT_BY_ACCOUNT_ID_REQ = 45,
                QUERY_ACCOUNT_BY_ACCOUNT_ID_RSP = 46,
                QUERY_ACCOUNT_LIST_BY_ACCOUNT_CODE_REQ = 47,
                QUERY_ACCOUNT_LIST_BY_ACCOUNT_CODE_RSP = 48,
                GET_CONTRACT_LIST_REQ = 49,
                GET_CONTRACT_LIST_RSP = 50,
                QUERY_CONTRACT_BY_UNIFORM_SYMBOL_REQ = 51,
                QUERY_CONTRACT_BY_UNIFORM_SYMBOL_RSP = 52,
                SYNC_SLAVE_NODE_RUNTIME_DATA_REQ = 53,
                SYNC_SLAVE_NODE_RUNTIME_DATA_RSP = 54,
                GET_TICK_LIST_REQ = 55,
                GET_TICK_LIST_RSP = 56,
                QUERY_DB_BAR_LIST_REQ = 57,
                QUERY_DB_BAR_LIST_RSP = 58,
                QUERY_DB_TICK_LIST_REQ = 59,
                QUERY_DB_TICK_LIST_RSP = 60,
                QUERY_VOLUME_BAR_LIST_REQ = 61,
                QUERY_VOLUME_BAR_LIST_RSP = 62,
                EXCEPTION_RSP = 999999,
                ORDER_RTN = 1001,
                TRADE_RTN = 1002,
                CONTRACT_RTN = 1003,
                POSITION_RTN = 1004,
                ACCOUNT_RTN = 1005,
                TICK_RTN = 1006,
                ORDER_LIST_RTN = 1007,
                TRADE_LIST_RTN = 1008,
                CONTRACT_LIST_RTN = 1009,
                POSITION_LIST_RTN = 1010,
                ACCOUNT_LIST_RTN = 1011,
                TICK_LIST_RTN = 1012,
                NOTICE_RTN = 1013
            }

            /** Properties of a DataExchangeProtocol. */
            interface IDataExchangeProtocol {

                /** DataExchangeProtocol contentType */
                contentType?: (xyz.redtorch.pb.DataExchangeProtocol.ContentType|null);

                /** DataExchangeProtocol rpcId */
                rpcId?: (number|null);

                /** DataExchangeProtocol contentBytes */
                contentBytes?: (Uint8Array|null);

                /** DataExchangeProtocol timestamp */
                timestamp?: (number|Long|null);
            }

            /** Represents a DataExchangeProtocol. */
            class DataExchangeProtocol implements IDataExchangeProtocol {

                /**
                 * Constructs a new DataExchangeProtocol.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: xyz.redtorch.pb.IDataExchangeProtocol);

                /** DataExchangeProtocol contentType. */
                public contentType: xyz.redtorch.pb.DataExchangeProtocol.ContentType;

                /** DataExchangeProtocol rpcId. */
                public rpcId: number;

                /** DataExchangeProtocol contentBytes. */
                public contentBytes: Uint8Array;

                /** DataExchangeProtocol timestamp. */
                public timestamp: (number|Long);

                /**
                 * Creates a new DataExchangeProtocol instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DataExchangeProtocol instance
                 */
                public static create(properties?: xyz.redtorch.pb.IDataExchangeProtocol): xyz.redtorch.pb.DataExchangeProtocol;

                /**
                 * Encodes the specified DataExchangeProtocol message. Does not implicitly {@link xyz.redtorch.pb.DataExchangeProtocol.verify|verify} messages.
                 * @param message DataExchangeProtocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: xyz.redtorch.pb.IDataExchangeProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DataExchangeProtocol message, length delimited. Does not implicitly {@link xyz.redtorch.pb.DataExchangeProtocol.verify|verify} messages.
                 * @param message DataExchangeProtocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: xyz.redtorch.pb.IDataExchangeProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DataExchangeProtocol message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DataExchangeProtocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): xyz.redtorch.pb.DataExchangeProtocol;

                /**
                 * Decodes a DataExchangeProtocol message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DataExchangeProtocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): xyz.redtorch.pb.DataExchangeProtocol;

                /**
                 * Verifies a DataExchangeProtocol message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DataExchangeProtocol message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DataExchangeProtocol
                 */
                public static fromObject(object: { [k: string]: any }): xyz.redtorch.pb.DataExchangeProtocol;

                /**
                 * Creates a plain object from a DataExchangeProtocol message. Also converts values to other types if specified.
                 * @param message DataExchangeProtocol
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: xyz.redtorch.pb.DataExchangeProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DataExchangeProtocol to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DataExchangeProtocol {

                /** ContentType enum. */
                enum ContentType {
                    ROUTINE = 0,
                    COMPRESSED_LZ4 = 1
                }
            }
        }
    }
}
