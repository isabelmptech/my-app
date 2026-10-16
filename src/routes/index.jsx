// Arquivo responsável por criar um contexto de navegação
import { NavigationContainer } from "@react-navigation/native";

// import { StackRouter } from "./StackRouter";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

// Aqui irá ficar a constante de navegação
// OBS: Alterar a linha somente para testar os tipos de navegação
// Valores possíveis para a constante - "stack" | "bottom" | "drawer" 
const TIPOS_DE_NAVEGACAO = "bottom";

export function Routes() {
    
    return(
        <NavigationContainer>
            {/* Renderização condicional: Só um navegador fica ativo por vez */}
            {TIPOS_DE_NAVEGACAO === "stack" && <StackRoutes />}
            {TIPOS_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
            {TIPOS_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
        </NavigationContainer>
    )
}