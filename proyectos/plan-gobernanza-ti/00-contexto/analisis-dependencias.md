---
aliases:
  - Análisis de Dependencias
tags:
  - activo
---

# Análisis de Dependencias — Plan TI Grupo EBI 2026

## Matriz de Dependencias entre Tareas

### Cadenas de Bloqueo Crítico

```
[PRIORIDAD 0 — Sin precondición]
├── L2.01 (Definición roles) → L2.02 → L2.03
├── L3.01 (Teams) → L3.02 → L3.03
└── L3.04 (Instrumento catastro) → L3.05

[PRIORIDAD 1 — Línea crítica L2]
L2.01 → L2.02 → L2.03 → L2.04 → L2.05 → L2.06 → L2.07 → L2.08 → L2.09
                                                                          ↓
                                                                    G2 (Autonomía)

[PRIORIDAD 2 — Línea crítica L3]
L3.01 → L3.02 → L3.03 ──────────────────────────────────────→ G2
    └──→ L3.04 → L3.05 → L3.06 → L3.07 → L3.08 → L3.09 → L3.10
                                                            ↓
                    L3.15 → L3.16 → L3.17 → L3.18 ─────→ G2
                                                            ↓
                    L3.19 → L3.20 → L3.21 → L3.22 → L3.23
                                                            ↓
                    L3.24 → L3.25 ──────────────────────→ G3 (5 políticas)
                                                            ↓
                    L3.26 → L3.27 → L3.28 → L3.29 → L3.30 → L3.31 → L3.32
                                                            ↓
                    L3.33 → L3.34 → L3.35 → L3.36 ───────→ G4 → G5

[PRIORIDAD 3 — Línea L4 (requiere L3)]
L3.09 → L3.10 → L3.11 → L3.12 → L3.13 → L3.14 ──────→ L4.01 → L4.02 → L4.03 → L4.04 → L4.05 → L4.06

[PRIORIDAD 4 — Línea L5 (requiere L4)]
L4.02 (BD central) → L5.01 → L5.02 → L3.03 → L5.04
```

---

## Tareas con Mayor Poder de Bloqueo

| Tarea | Bloquea | Impacto |
|-------|---------|---------|
| **L3.09** — Consolidar catastro Level A | G2, L3.15, L3.10 | Crítico: habilita diagnóstico y Level B |
| **L3.18** — Consolidar diagnóstico normativo | G2, L3.19 | Crítico: habilita redacción de políticas |
| **L3.25** — Aprobación de 5 políticas | G3 | Crítico: habilita cierre Deloitte |
| **L3.36** — Reporte G5 | G5 | Crítico: cierra el plan |
| **L2.09** — Validación autonomía técnica | G2 | Crítico: valida que L2 terminó |
| **L3.13** — Consolidar catastro B+C | G3 | Crítico: habilita L4 |

---

## Tareas Bloqueadas (Dependientes)

### Bloqueadas por L3.09 (Catastro Level A)

| Tarea | Dependencia |
|-------|-------------|
| L3.10 — Levantamiento Level B | L3.09 |
| L3.15 — Levantar brechas Ley 19.628 | L3.09 |
| L3.16 — Determinar OIV/NIST | L3.09 |
| G2 — Catastro A consolidado | L3.09 |

### Bloqueadas por L3.18 (Diagnóstico normativo)

| Tarea | Dependencia |
|-------|-------------|
| L3.19 — Política Acceso | L3.18 |
| L3.20 — Política Gestión Cambios | L3.18 |
| L3.21 — Política Seguridad Información | L3.18 |
| L3.22 — Política Protección Datos | L3.18 |
| L3.23 — Política Continuidad | L3.18 |

### Bloqueadas por L3.25 (5 políticas aprobadas)

| Tarea | Dependencia |
|-------|-------------|
| L3.26 — Habilitación MFA | L3.25 |
| L3.27 — Antivirus corporativo | L3.25 |
| L3.28 — Canal soporte TI | L3.25 |
| L3.29 — DRP formal | L3.25 |
| L3.35 — Cierre formal proyectos | L3.25 |
| G3 — Gateway 3 | L3.25 |

### Bloqueadas por L3.13 (Catastro B+C)

| Tarea | Dependencia |
|-------|-------------|
| L4.01 — Diseño arquitectura | L3.13 |
| G3 — Catastro completo | L3.13 |

### Bloqueadas por L4.02 (BD central)

| Tarea | Dependencia |
|-------|-------------|
| L5.01 — Catálogo integraciones | L4.02 |
| L4.03 — Homogenización maestros | L4.02 |
| L4.04 — Artefactos sincronización | L4.02 |
| L4.05 — Migración soluciones | L4.02 |
| L4.06 — Nuevas aplicaciones | L4.02 |

---

## Reportería de Prioridades

### PRIORIDAD A — Crítico (Ruta crítica)

Son las tareas que están en la ruta crítica hacia G2, G3 y G5. Retraso en estas tareas impacta directamente los hitos.

| Prioridad | Tarea | Output | Bloqueada por | Bloquea |
|-----------|-------|--------|---------------|---------|
| A1 | L2.01 — Definición roles | Documento roles | — | L2.02 |
| A2 | L2.02 — Validar organigrama | Acta validación | L2.01 | L2.03 |
| A3 | L2.03 — Definir rol DGM | Perfil DGM | L2.02 | L2.04 |
| A4 | L2.04 — Extracción conocimiento | Actas sesiones | L2.03 | L2.05 |
| A5 | L2.05 — Inventario técnico | Documento técnico | L2.04 | L2.06 |
| A6 | L2.06 — Plan transferencia | Plan transferencia | L2.05 | L2.07 |
| A7 | L2.07 — Transferencia Ronda 1 | Acta transferencia | L2.06 | L2.08 |
| A8 | L2.08 — Transferencia Ronda 2 | Acta validación | L2.07 | L2.09 |
| A9 | L2.09 — Autonomía técnica | Informe autonomía | L2.08 | **G2** |
| A10 | L3.01 — Canal Teams | Teams operativo | — | L3.02 |
| A11 | L3.02 — Estructura Planner | Planes configurados | L3.01 | L3.03 |
| A12 | L3.03 — Estructura SharePoint | Librerías creadas | L3.02 | L3.04, L3.06 |
| A13 | L3.04 — Instrumento catastro | Formulario 78 campos | — | L3.05 |
| A14 | L3.05 — Validar instrumento | Instrumento aprobado | L3.04 | L3.06 |
| A15 | L3.06 — Coordinar entrevistas | Calendario | L3.05 | L3.07 |
| A16 | L3.07 — Entrevistas bloque 1 | Datos consolidados | L3.06 | L3.08 |
| A17 | L3.08 — Entrevistas bloque 2 | Datos consolidados | L3.07 | L3.09 |
| A18 | L3.09 — Consolidar Level A | Dashboard Level A | L3.08 | **G2**, L3.10, L3.15 |
| A19 | L3.15 — Brechas Ley 19.628 | Matriz brechas | L3.09 | L3.16 |
| A20 | L3.16 — OIV/NIST | Evaluación | L3.15 | L3.17 |
| A21 | L3.17 — Hallazgos Deloitte | Matriz hallazgos | L3.16 | L3.18 |
| A22 | L3.18 — Diagnóstico normativo | Reporte brechas | L3.17 | **G2**, L3.19 |
| A23 | L3.19 — Política Acceso | Política aprobada | L3.18 | L3.20 |
| A24 | L3.20 — Política Cambios | Política aprobada | L3.19 | L3.21 |
| A25 | L3.21 — Política Seguridad | Política aprobada | L3.20 | L3.22 |
| A26 | L3.22 — Política Datos | Política aprobada | L3.21 | L3.23 |
| A27 | L3.23 — Política Continuidad | Política aprobada | L3.22 | L3.24 |
| A28 | L3.24 — Validación cruzada | Informe consistencia | L3.23 | L3.25 |
| A29 | L3.25 — Aprobación políticas | Acta aprobación | L3.24 | **G3**, L3.26 |
| A30 | L3.35 — Cierre proyectos | Actas cierre | L3.25 | L3.36 |
| A31 | L3.36 — Reporte G5 | Reporte G5 | L3.35 | **G5** |

### PRIORIDAD B — Alto (Habilitadores)

Tareas que no están en ruta crítica directa pero habilitan componentes importantes.

| Prioridad | Tarea                        | Output               | Dependencia |
| --------- | ---------------------------- | -------------------- | ----------- |
| B1        | L3.10 — Level B              | Registro Level B     | L3.09       |
| B2        | L3.11 — Level C ERP          | Doc técnico 11 SQL   | L3.10       |
| B3        | L3.12 — Level C no-ERP       | Registro técnico     | L3.11       |
| B4        | L3.13 — Consolidar B+C       | Informe consolidado  | L3.12       |
| B5        | L3.14 — Dashboard portafolio | Dashboard            | L3.13       |
| B6        | L3.26 — Habilitación MFA     | MFA habilitado       | L3.25       |
| B7        | L3.27 — Antivirus            | Antivirus desplegado | L3.26       |
| B8        | L3.28 — Canal soporte        | Mesa ayuda           | L3.27       |
| B9        | L3.29 — DRP                  | DRP aprobado         | L3.28       |
| B10       | L3.30 — Procedimiento ABM    | Procedimiento        | L3.29       |
| B11       | L3.31 — Instructivos usuario | Instructivos         | L3.30       |
| B12       | L3.32 — Plan comunicaciones  | Plan aprobado        | L3.31       |
| B13       | L3.33 — Diagramas infra      | Diagramas            | L3.32       |
| B14       | L3.34 — Gateway D-30         | Registro             | L3.33       |

### PRIORIDAD C — Medio (Paralelizables)

Tareas que pueden ejecutarse en paralelo con otras una vez habilitadas.

| Prioridad | Tarea | Output | Dependencia |
|-----------|-------|--------|-------------|
| C1 | L1.01 — Seguimiento semanal | Acta semanal | L3.01 |
| C2 | L1.02 — Reporte RAG mensual | Reporte RAG | L1.01 |
| C3 | L1.03 — Fichas normativos | 3 Fichas | L3.18 |
| C4 | L1.04 — Aprobación sponsors | Acta | L1.03 |
| C5 | L1.05 — Entornos digitales | Teams+Planner+SP | L1.04 |
| C6 | L1.06 — Fichas estratégicos | 6 Fichas | L1.05 |
| C7 | L1.07 — Aprobación presupuesto | Acta | L1.06 |
| C8 | L1.08 — Mapeo Deloitte↔L3 | Matriz | L3.17 |
| C9 | L1.09 — Cierre formal | 3 Actas | L3.25 |
| C10 | L1.10 — Reporte G5 | Reporte | L3.35 |
| C11 | L2.10 — Brechas capacidad | Matriz brechas | L2.09 |
| C12 | L2.11 — Perfiles nuevos | Perfiles cargo | L2.10 |
| C13 | L2.12 — Incorporación roles | Contratos | L2.11 |

### PRIORIDAD D — Bajo (L4/L5)

Tareas de infraestructura e integraciones que dependen de catastro completo.

| Prioridad | Tarea | Output | Dependencia |
|-----------|-------|--------|-------------|
| D1 | L4.01 — Arquitectura | Documento | L3.13 |
| D2 | L4.02 — BD central | Esquema BD | L4.01 |
| D3 | L4.03 — Maestros | Catálogo | L4.02 |
| D4 | L4.04 — Artefactos sync | Scripts/API | L4.03 |
| D5 | L4.05 — Migración | Servicios mig. | L4.04 |
| D6 | L4.06 — Nuevas apps | Aplicaciones | L4.05 |
| D7 | L5.01 — Catálogo integ. | Inventario | L4.02 |
| D8 | L5.02 — Estándares | Estándares | L5.01 |
| D9 | L5.03 — Proc. monitoreo | Procedimientos | L5.02 |
| D10 | L5.04 — Roadmap integ. | Roadmap | L4.02 |

---

## Análisis de Ruta Crítica

```
SECUENCIA CRÍTICA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

L2.01 → L2.02 → L2.03 → L2.04 → L2.05 → L2.06 → L2.07 → L2.08 → L2.09 → G2
                                                                             ↓
L3.01 → L3.02 → L3.03 → L3.04 → L3.05 → L3.06 → L3.07 → L3.08 → L3.09 → G2
                                                                             ↓
L3.15 → L3.16 → L3.17 → L3.18 → G2 → L3.19 → L3.20 → L3.21 → L3.22 → L3.23
                                                                             ↓
L3.24 → L3.25 → G3 → L3.26 → L3.27 → L3.28 → L3.29 → L3.30 → L3.31 → L3.32
                                                                             ↓
L3.33 → L3.34 → L3.35 → L3.36 → G5
```

---

## Riesgo de Bloqueo por Tarea

| Tarea | Riesgo de bloqueo | Impacto si se bloquea |
|-------|-------------------|----------------------|
| L3.09 (Consolidar Level A) | ALTO — Dependen 10+ tareas | Retraso G2 + paraliza diagnóstico |
| L3.18 (Diagnóstico normativo) | ALTO — 5 políticas dependen | Retraso G2 + paraliza toda L3 |
| L3.25 (Aprobación políticas) | ALTO — Habilita G3 y cierre | Retraso G3 + Deloitte no cierra |
| L2.09 (Autonomía técnica) | MEDIO — Solo L2 depende | Retraso G2 |
| L4.02 (BD central) | ALTO — 5+ tareas L4/L5 | Retraso infraestructura completa |

---

## Recomendaciones de Priorización

1. **Iniciar inmediatamente:** L2.01, L3.01, L3.04 (sin precondiciones)
2. **Mantener ritmo:** Secuencia L2 → L3.09 → G2 sin interrupciones
3. **No paralizar:** Evitar iniciar L4/L5 hasta tener L3.13 (Catastro B+C)
4. **Monitoreo crítico:** Las tareas L3.09, L3.18, L3.25 son puntos de supervisión intensiva
5. **Buffer:** Prever tiempo extra en entrevistas Level A (L3.07, L3.08) por disponibilidad de subsidiarias