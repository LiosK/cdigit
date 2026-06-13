// regret-adapters.mjs — Adapter module for cdigit class-instance exports
// Bridges singleton class instances to standalone functions for Regrets Ghost Proxy
import {
  luhn,
  verhoeff,
  damm,
  mod11_2,
  mod37_2,
  mod97_10,
  mod661_26,
  mod1271_36,
  mod11_10,
  mod27_26,
  mod37_36,
  gtin
} from './lib/index.js';

// Luhn algorithm adapters
export function luhnCompute(s) { return luhn.compute(s); }
export function luhnValidate(s) { return luhn.validate(s); }
export function luhnGenerate(s) { return luhn.generate(s); }

// Verhoeff algorithm adapters
export function verhoeffCompute(s) { return verhoeff.compute(s); }
export function verhoeffValidate(s) { return verhoeff.validate(s); }
export function verhoeffGenerate(s) { return verhoeff.generate(s); }

// Damm algorithm adapters
export function dammCompute(s) { return damm.compute(s); }
export function dammValidate(s) { return damm.validate(s); }
export function dammGenerate(s) { return damm.generate(s); }

// ISO 7064 MOD 11-2 adapters
export function mod11_2Compute(s) { return mod11_2.compute(s); }
export function mod11_2Validate(s) { return mod11_2.validate(s); }
export function mod11_2Generate(s) { return mod11_2.generate(s); }

// ISO 7064 MOD 37-2 adapters
export function mod37_2Compute(s) { return mod37_2.compute(s); }
export function mod37_2Validate(s) { return mod37_2.validate(s); }
export function mod37_2Generate(s) { return mod37_2.generate(s); }

// ISO 7064 MOD 97-10 adapters
export function mod97_10Compute(s) { return mod97_10.compute(s); }
export function mod97_10Validate(s) { return mod97_10.validate(s); }
export function mod97_10Generate(s) { return mod97_10.generate(s); }

// ISO 7064 MOD 661-26 adapters
export function mod661_26Compute(s) { return mod661_26.compute(s); }
export function mod661_26Validate(s) { return mod661_26.validate(s); }
export function mod661_26Generate(s) { return mod661_26.generate(s); }

// ISO 7064 MOD 1271-36 adapters
export function mod1271_36Compute(s) { return mod1271_36.compute(s); }
export function mod1271_36Validate(s) { return mod1271_36.validate(s); }
export function mod1271_36Generate(s) { return mod1271_36.generate(s); }

// ISO 7064 MOD 11,10 hybrid adapters
export function mod11_10Compute(s) { return mod11_10.compute(s); }
export function mod11_10Validate(s) { return mod11_10.validate(s); }
export function mod11_10Generate(s) { return mod11_10.generate(s); }

// ISO 7064 MOD 27,26 hybrid adapters
export function mod27_26Compute(s) { return mod27_26.compute(s); }
export function mod27_26Validate(s) { return mod27_26.validate(s); }
export function mod27_26Generate(s) { return mod27_26.generate(s); }

// ISO 7064 MOD 37,36 hybrid adapters
export function mod37_36Compute(s) { return mod37_36.compute(s); }
export function mod37_36Validate(s) { return mod37_36.validate(s); }
export function mod37_36Generate(s) { return mod37_36.generate(s); }

// GTIN adapters
export function gtinCompute(s) { return gtin.compute(s); }
export function gtinValidate(s) { return gtin.validate(s); }
export function gtinGenerate(s) { return gtin.generate(s); }
