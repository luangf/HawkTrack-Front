# Coding Guidelines

## Code Structure / Archives Creation
- arquivos TS camelCase
- utilizar ao maximo TS inference
- function sempre, callbacks fazer a funcao como arrow function; se n for function, se for code snippet 
- export default como principal motivo da criação do arquivo, export sem default p/outros...
- padrao inicial: export default function Register
- Componentes em PascalCase, i.e.: DashboardMenu
- Custom hooks em camelCase, i.e.: useAuthMutate
  - criar custom hooks. Design Patterns / clean code
  - retornar custom hooks como objetos.., Retornar um array — usado quando a ordem dos valores tem significado..
- Folder with hifen & lower

## Nomeation
???Funções que lidam com eventos começam com `handle`
???- Props de callback começam com `on`
???- Estados booleanos com `is`, `has` ou verbos (`isVisible`, `hasError`, `showModal`)
- Use "handle" instead "on...", i.e.: "onPasswordVisibleClick" => "handlePasswordVisible"
  - (in the future revision this rule)* Can use words like "toggle", more especific, just if the function only does it

## ver sobre aonde botar
- por enquanto to usando default só quando tem so uma coisa no arquivo sendo exportada
- e to usando export direto no lugar, pq normalmente n to exportando mais de 1 componente e tals, e ...